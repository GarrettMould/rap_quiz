import { Card } from "react-bootstrap";
import VoteCardTitle from "../VoteCardTitle/VoteCardTitle";
import VoteCardBody from "../VoteCardBody/VoteCardBody";
import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCard.module.css";
const VoteCard = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.voteCard}>
        <VoteCardTitle voteCardTitle="Mac Miller"></VoteCardTitle>
        <VoteCardBody></VoteCardBody>
        <VoteCardButton></VoteCardButton>
      </Card>
    </div>
  );
};

export default VoteCard;
