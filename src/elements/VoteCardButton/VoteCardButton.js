import { Button } from "react-bootstrap";
import classes from "./VoteCardButton.module.css";

const VoteCardButton = (props) => {
  return (
    <div className={classes.container}>
      <Button className={classes.voteButton}>Vote</Button>
    </div>
  );
};

export default VoteCardButton;
