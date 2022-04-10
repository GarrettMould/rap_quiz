import React, { useState } from "react";
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

import Countdown from "react-countdown";
import BtnSubmit from "../../elements/BtnSubmit/BtnSubmit";
import { questions } from "../../Sharede/Shared";
import classes from "./PlayPage.module.css";

const PlayPage = (props) => {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  //Howler Play Song Function
  const soundPlay = (song) => {
    const Sounds = new Howl({
      src: [song],
    });
    Sounds.play();
  };

  // Check if Answer is Correct / Update Score / Advance to Next Round or End Game
  const nextRound = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextRound = round + 1;

    if (nextRound < questions.length) {
      setRound(round + 1);

      var songNew = round + 1;
      soundPlay(questions[songNew].audio);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={classes.container}>
      {showScore ? (
        <div></div>
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
                onComplete={nextRound}
                date={Date.now() + 8000}
                renderer={(props) => <div>{props.seconds}</div>}
              />
            </div>
          </div>
          <div className={classes.difficultyContainer}>
            <div>Level: {questions[round].difficulty}</div>
          </div>
        </div>
      )}

      <div className={classes.rowTwo}>
        {showScore ? (
          <Card className={classes.scoreCard}>
            <div className={classes.scoreCardFormat}>
              <div className={classes.finishedMessage}>All Finished!</div>
              <div className={classes.totalScore}>
                Total Score: {score} / 10
              </div>
              <div className={classes.buttonRow}>
                <Button className={classes.btnPlay}>Play Again</Button>
              </div>
            </div>
          </Card>
        ) : (
          <ButtonGroup className={classes.group}>
            <Container>
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
        )}
      </div>
    </div>
  );
};

export default PlayPage;
