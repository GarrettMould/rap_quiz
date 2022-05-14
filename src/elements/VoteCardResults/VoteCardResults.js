import { Card } from "react-bootstrap";
import Poll from "react-polls";
import classes from "./VoteCardResults.module.css";
const VoteCardResults = (props) => {
  const pollQuestion = "Next Rap Quiz Artist";
  const pollAnswers = [
    { option: "Tyler, the Creator", votes: 8 },
    { option: "Kendrick Lamar", votes: 2 },
    { option: "Mac Miller", votes: 1 },
  ];
  return (
    <div className={classes.container}>
      <Card className={classes.voteCard}>
        <Poll
          customStyles={{
            theme: "white",
            questionColor: "#f20505e1",
            questionBold: true,
          }}
          question={pollQuestion}
          answers={pollAnswers}
          className={classes.poll}
        ></Poll>
      </Card>
    </div>
  );
};

export default VoteCardResults;
