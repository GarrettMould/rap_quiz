import VoteCard from "../../elements/VoteCard/VoteCard";
import classes from "./VoteSection.module.css";

const VoteSection = (props) => {
  return (
    <div className={classes.container}>
      <VoteCard></VoteCard>
    </div>
  );
};

export default VoteSection;
