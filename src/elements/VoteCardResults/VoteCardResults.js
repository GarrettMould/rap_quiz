import { Card } from "react-bootstrap";
import Media from "react-media";

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
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.container}>
            <Card className={classes.voteCard}>
              <Poll
                customStyles={{
                  theme: "white",
                  questionColor: "rgba(255, 255, 255, 0.854)",
                  questionBold: true,
                }}
                question={pollQuestion}
                answers={pollAnswers}
                className={classes.poll}
              ></Poll>
            </Card>
          </div>
        ) : (
          <div className={classes.container}>
            <Card className={classes.voteCard}>
              <Poll
                customStyles={{
                  theme: "white",
                  questionColor: "rgba(255, 255, 255, 0.854)",
                  questionBold: true,
                }}
                question={pollQuestion}
                answers={pollAnswers}
                className={classes.poll}
              ></Poll>
            </Card>
          </div>
        )
      }
    </Media>
  );
};

export default VoteCardResults;
