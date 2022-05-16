import { Card, Row, Col } from "react-bootstrap";
import Media from "react-media";

import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCardTylerTheCreator.module.css";
const VoteCardTylerTheCreator = (props) => {
  const [artist, setArtist] = "mac";
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.container}>
            <Card className={classes.voteCard}>
              <div className={classes.voteCardTitle}>Tyler, the Creator</div>
              <div className={classes.container}>
                <Row className="mb-3">
                  <Col className="m-1">
                    {" "}
                    <div className={classes.albumContainer}>
                      <div className={classes.albumOne}></div>
                    </div>
                  </Col>
                  <Col className="m-1">
                    <div className={classes.albumContainer}>
                      <div className={classes.albumTwo}></div>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="m-1">
                    {" "}
                    <div className={classes.albumContainer}>
                      <div className={classes.albumThree}></div>
                    </div>
                  </Col>
                  <Col className="m-1">
                    <div className={classes.albumContainer}>
                      <div className={classes.albumFour}></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        ) : (
          <div className={classes.container}>
            <Card className={classes.voteCard}>
              <div className={classes.voteCardTitleDesktop}>
                Tyler, the Creator
              </div>
              <div className={classes.container}>
                <Row className="mb-3">
                  <Col className="m-1">
                    {" "}
                    <div className={classes.albumContainer}>
                      <div className={classes.albumOne}></div>
                    </div>
                  </Col>
                  <Col className="m-1">
                    <div className={classes.albumContainer}>
                      <div className={classes.albumTwo}></div>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="m-1">
                    {" "}
                    <div className={classes.albumContainer}>
                      <div className={classes.albumThree}></div>
                    </div>
                  </Col>
                  <Col className="m-1">
                    <div className={classes.albumContainer}>
                      <div className={classes.albumFour}></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        )
      }
    </Media>
  );
};

export default VoteCardTylerTheCreator;
