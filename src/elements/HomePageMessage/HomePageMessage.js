import classes from "./HomePageMessage.module.css";
import { Link } from "react-router-dom";
import Media from "react-media";

import { Container, Button, Row, Col } from "react-bootstrap";

const HomePageMessage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.containerMobile}>
            <Container className="d-flex flex-column align-items-center">
              <div className={classes.mainTextMobile}>
                Welcome to Kanye Quiz
              </div>
              <div className={classes.subTextMobile}>
                The only site where you can truly prove your standom
              </div>
              <Link to="/playPage">
                <Button
                  className={classes.buttonMobile}
                  onClick={props.startGame}
                >
                  Start Quiz
                </Button>
              </Link>
            </Container>
          </div>
        ) : (
          <div className={classes.container}>
            <Container>
              <div className={classes.mainText}>Welcome to Kanye Quiz</div>
              <div className={classes.subText}>
                The only site where you can truly prove your standom
              </div>
              <Link to="/playPage">
                <Button className={classes.button} onClick={props.startGame}>
                  Start Quiz
                </Button>
              </Link>
            </Container>
          </div>
        )
      }
    </Media>
  );
};
export default HomePageMessage;
