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

import ReactHowler from "react-howler";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Countdown, { calcTimeDelta } from "react-countdown";
import { questions, questionSet, audio } from "../../Sharede/Shared";
import classes from "./PlayPage.module.css";

const PlayPage = (props) => {
  //Setting default state
  const [playing, setPlaying] = useState(false);
  const [songPlaying, setSongPlaying] = useState(true);
  const [rowTwoDisplay, setRowTwoDisplay] = useState("startMenu");
  const [round, setRound] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedID, setSelectedID] = useState(2);
  const [isCorrect, setIsCorrect] = useState(null);

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

  // Countdown Handle Pause Function
  const handlePause = () => clockRef.current.stop();

  // Array of audio sources for each question
  const sources = audio;

  // Conditionally set background color

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
                  playing={songPlaying === true ? true : false}
                  // When the sources are swapped we'll pass a new
                  // src prop into ReactHowler which will destroy our
                  // currently playing Howler.js and initialize
                  // a new Howler.js instance
                  src={sources[round]}
                />
                <div className="d-flex flex-column justify-content-center mt-5">
                  {questionSet[round].answerOptions.map((answerOption, i) => (
                    <Button
                      className={
                        isCorrect == true && selectedID == i
                          ? classes.buttonCorrectMobile
                          : isCorrect == false && selectedID == i
                          ? classes.buttonIncorrectMobile
                          : classes.buttonMobile
                      }
                      id={i}
                      onClick={(e) => checkAnswer(answerOption.isCorrect, e)}
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
                  {questionSet[round].answerOptions.map((answerOption, i) => (
                    <Button
                      className={
                        isCorrect == true && selectedID == i
                          ? classes.buttonCorrect
                          : isCorrect == false && selectedID == i
                          ? classes.buttonIncorrect
                          : classes.button
                      }
                      id={i}
                      onClick={(e) => checkAnswer(answerOption.isCorrect, e)}
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
  } else if (rowTwoDisplay === "correctAnswer") {
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
  // FUNCTION: Next Round (When timer runs down)

  const nextRound = () => {
    if (isCorrect == true) {
      setIsCorrect(true);
      setScore(score + 1);
    } else if (isCorrect == false) {
      setIsCorrect(false);
    }

    setSongPlaying(false);
    handlePause();

    // FUNCTION: Move onto next round after two seconds
    setTimeout(() => {
      setRowTwoDisplay("playing");
      setIsCorrect(null);
      setSongPlaying(true);
      const nextRound = round + 1;

      if (nextRound < questionSet.length) {
        setRound(round + 1);
        handleStart();
      } else {
        setPlaying(false);
        setRowTwoDisplay("scoreMenu");
      }
    }, 0);
  };
  // FUNCTION: Check if the selected answer is true or false

  const checkAnswer = (isCorrect, e) => {
    var target = e.currentTarget.id;
    setSelectedID(target);

    if (isCorrect == true) {
      setIsCorrect(true);
      setScore(score + 1);
    } else if (isCorrect == false) {
      setIsCorrect(false);
    }

    setSongPlaying(false);
    handlePause();

    // FUNCTION: Move onto next round after two seconds
    setTimeout(() => {
      setRowTwoDisplay("playing");
      setIsCorrect(null);
      setSongPlaying(true);
      const nextRound = round + 1;

      if (nextRound < questionSet.length) {
        setRound(round + 1);
        handleStart();
      } else {
        setPlaying(false);
        setRowTwoDisplay("scoreMenu");
      }
    }, 1000);
  };
  // Check if Answer is Correct / Update Score / Advance to Next Round or End Game

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
                      <span className={classes.light}>{round + 1}/10</span>
                    </div>
                  </div>
                  <div className={classes.timerContainerMobile}>
                    <div>
                      <Countdown
                        ref={clockRef}
                        controlled={false}
                        intervalDelay={1000}
                        onComplete={nextRound}
                        date={Date.now() + 8000}
                        autoStart={true}
                        renderer={(props) => {
                          return <div>{props.seconds}</div>;
                        }}
                      />
                    </div>
                  </div>
                  <div className={classes.difficultyContainerMobile}>
                    <div>
                      Score: <br></br>{" "}
                      <span className={classes.light}>{score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={classes.rowOne}>
                <div className={classes.roundContainer}>
                  <div>
                    Round: <br></br>
                    <span className={classes.light}>{round + 1}/10</span>
                  </div>
                </div>
                <div className={classes.timerContainer}>
                  <div>
                    <Countdown
                      ref={clockRef}
                      controlled={false}
                      intervalDelay={1000}
                      onComplete={nextRound}
                      date={Date.now() + 8000}
                      autoStart={true}
                      renderer={(props) => {
                        return <div>{props.seconds}</div>;
                      }}
                    />
                  </div>
                </div>
                <div className={classes.difficultyContainer}>
                  <div>
                    Score: <br></br>{" "}
                    <span className={classes.light}>{score}</span>
                  </div>
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
