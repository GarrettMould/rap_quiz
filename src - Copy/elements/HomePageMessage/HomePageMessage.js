import classes from "./HomePageMessage.module.css";

import { Container, Button } from "react-bootstrap";

const HomePageMessage = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.mainText}>Welcome to Kanye Quiz</div>
        <div className={classes.subText}>
          The only site where you can truly prove your standom
        </div>
        <Button className={classes.button} onClick={props.startGame}>
          Start Quiz
        </Button>
      </Container>
    </div>
  );
};
export default HomePageMessage;
