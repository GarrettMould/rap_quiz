import { Card, Row, Col } from "react-bootstrap";

import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCardKendrickLamar.module.css";
const VoteCardKendrickLamar = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.voteCard}>
        <div className={classes.voteCardTitle}>Kendrick Lamar</div>
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
      </Card>
    </div>
  );
};

export default VoteCardKendrickLamar;
