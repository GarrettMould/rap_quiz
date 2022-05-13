import { Card, Row, Col } from "react-bootstrap";
import { useState } from "react";

import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCardTylerTheCreator.module.css";
const VoteCardTylerTheCreator = (props) => {
  const [artist, setArtist] = "mac";
  return (
    <div className={classes.container}>
      <Card className={classes.voteCard}>
        <div className={classes.voteCardTitle}>Tyler, the Creator</div>
        <div className={classes.container}>
          <Row className="mb-4">
            <Col>
              {" "}
              <div className={classes.albumContainer}>
                <div className={classes.albumOne}></div>
              </div>
            </Col>
            <Col>
              <div className={classes.albumContainer}>
                <div className={classes.albumTwo}></div>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              {" "}
              <div className={classes.albumContainer}>
                <div className={classes.albumThree}></div>
              </div>
            </Col>
            <Col>
              <div className={classes.albumContainer}>
                <div className={classes.albumFour}></div>
              </div>
            </Col>
          </Row>
        </div>
        <VoteCardButton></VoteCardButton>
      </Card>
    </div>
  );
};

export default VoteCardTylerTheCreator;
