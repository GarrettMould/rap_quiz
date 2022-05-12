import { Card } from "react-bootstrap";
import classes from "./VoteCardTitle.module.css";
const VoteCardTitle = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.voteCardTitle}>{props.voteCardTitle}</div>
    </div>
  );
};

export default VoteCardTitle;
