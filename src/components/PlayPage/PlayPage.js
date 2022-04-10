import React, { useState, useRef } from "react";
import Media from "react-media";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import { Play } from "phosphor-react";
import { Howl, Howler } from "howler";
import ReactHowler from "react-howler";
import { audioSources } from "../../Sharede/Shared";
import Countdown from "react-countdown";
import BtnSubmit from "../../elements/BtnSubmit/BtnSubmit";
import { questions } from "../../Sharede/Shared";
import classes from "./PlayPage.module.css";

const PlayPage = (props) => {
  //Setting default state
  const [playing, setPlaying] = useState(false);
  const [rowTwoDisplay, setRowTwoDisplay] = useState("startMenu");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  //FUNCTION: start a new game
  const startGame = () => {
    setRound(0);
    setScore(0);
    setPlaying(true);
    setRowTwoDisplay("playing");
  };

  //FUNCTION: return to start menu
  const playAgain = () => {
    setRound(0);
    setScore(0);
    setPlaying(false);
    setRowTwoDisplay("startMenu");
  };

  //Countdown Ref
  const clockRef = useRef();

  // Countdown Handle Start Function
  const handleStart = () => clockRef.current.start();
  // Array of audio sources for each question
  const sources = audioSources;

  // Conditionally Set RowTwo Display
  var display;

  if (rowTwoDisplay == "startMenu") {
    display = (
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <Card className={classes.scoreCardMobile}>
              <div className={classes.scoreCardFormatMobile}>
                <div className={classes.instructionsTitleMobile}>
                  Instructions
                </div>
                <div className={classes.instructionsMessageMobile}>
                  Each round you will hear the first eight seconds of a Kanye
                  West song. Choose the correct song before the timer runs outs!
                </div>
                <div className={classes.buttonRow}>
                  <Button onClick={startGame} className={classes.btnPlay}>
                    Start Game
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className={classes.scoreCard}>
              <div className={classes.scoreCardFormat}>
                <div className={classes.instructionsTitle}>Instructions</div>
                <div className={classes.instructionsMessage}>
                  Each round you will hear the first eight seconds of a Kanye
                  West song. Choose the correct song before the timer runs outs!
                </div>
                <div className={classes.buttonRow}>
                  <Button onClick={startGame} className={classes.btnPlay}>
                    Start Game
                  </Button>
                </div>
              </div>
            </Card>
          )
        }
      </Media>
    );
  } else if (rowTwoDisplay == "playing") {
    display = (
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <ButtonGroup className={classes.groupMobile}>
              <Container>
                <ReactHowler
                  playing={true}
                  // When the sources are swapped we'll pass a new
                  // src prop into ReactHowler which will destroy our
                  // currently playing Howler.js and initialize
                  // a new Howler.js instance
                  src={sources[round]}
                />
                <div className="d-flex flex-column justify-content-center mt-5">
                  {questions[round].answerOptions.map((answerOption) => (
                    <Button
                      className={classes.buttonMobile}
                      onClick={() => nextRound(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </Button>
                  ))}
                </div>
              </Container>
            </ButtonGroup>
          ) : (
            <ButtonGroup className={classes.group}>
              <Container>
                <ReactHowler
                  playing={true}
                  // When the sources are swapped we'll pass a new
                  // src prop into ReactHowler which will destroy our
                  // currently playing Howler.js and initialize
                  // a new Howler.js instance
                  src={sources[round]}
                />
                <div className="d-flex justify-content-center">
                  {questions[round].answerOptions.map((answerOption) => (
                    <Button
                      className={classes.button}
                      onClick={() => nextRound(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </Button>
                  ))}
                </div>
              </Container>
            </ButtonGroup>
          )
        }
      </Media>
    );
  } else if (rowTwoDisplay == "scoreMenu") {
    display = (
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <Card className={classes.scoreCardMobile}>
              <div className={classes.scoreCardFormatMobile}>
                <div className={classes.finishedMessageMobile}>
                  All Finished!
                </div>
                <div className={classes.totalScoreMobile}>
                  Total Score: {score} / 10
                </div>
                <div className={classes.buttonRow}>
                  <Button onClick={playAgain} className={classes.btnPlay}>
                    Play Again
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className={classes.scoreCard}>
              <div className={classes.scoreCardFormat}>
                <div className={classes.finishedMessage}>All Finished!</div>
                <div className={classes.totalScore}>
                  Total Score: {score} / 10
                </div>
                <div className={classes.buttonRow}>
                  <Button onClick={playAgain} className={classes.btnPlay}>
                    Play Again
                  </Button>
                </div>
              </div>
            </Card>
          )
        }
      </Media>
    );
  }

  // Check if Answer is Correct / Update Score / Advance to Next Round or End Game
  const nextRound = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextRound = round + 1;

    if (nextRound < questions.length) {
      setRound(round + 1);
      handleStart();
    } else {
      setPlaying(false);
      setRowTwoDisplay("scoreMenu");
    }
  };

  return (
    <div className={classes.container}>
      {playing ? (
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <div className={classes.rowOneContainer}>
                <div className={classes.rowOneMobile}>
                  <div className={classes.roundContainerMobile}>
                    <div>
                      Round: <br></br>
                      {round + 1}
                      <span>/</span>10
                    </div>
                  </div>
                  <div className={classes.timerContainerMobile}>
                    <div>
                      <Countdown
                        ref={clockRef}
                        intervalDelay={1000}
                        onComplete={nextRound}
                        date={Date.now() + 8000}
                        autoStart={true}
                        renderer={(props) => <div>{props.seconds}</div>}
                      />
                    </div>
                  </div>
                  <div className={classes.difficultyContainerMobile}>
                    <div>
                      Level: <br></br> {questions[round].difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={classes.rowOne}>
                <div className={classes.roundContainer}>
                  <div>
                    Round: {round + 1}
                    <span>/</span>10
                  </div>
                </div>
                <div className={classes.timerContainer}>
                  <div>
                    <Countdown
                      ref={clockRef}
                      intervalDelay={1000}
                      onComplete={nextRound}
                      date={Date.now() + 8000}
                      autoStart={true}
                      renderer={(props) => <div>{props.seconds}</div>}
                    />
                  </div>
                </div>
                <div className={classes.difficultyContainer}>
                  <div>Level: {questions[round].difficulty}</div>
                </div>
              </div>
            )
          }
        </Media>
      ) : (
        <div></div>
      )}

      <div className={classes.rowTwo}>{display}</div>
    </div>
  );
};

export default PlayPage;
