import { Card, Row, Col } from "react-bootstrap";
import classes from "./VoteCardBody.module.css";
const VoteCardBody = (props) => {
  return (
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
  );
};

export default VoteCardBody;
