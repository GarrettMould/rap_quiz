import { Card } from "react-bootstrap";

import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCardHomePage.module.css";
const VoteCardHomePage = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.voteCard}>
        <div className={classes.voteCardTitle}>Rap Quiz V2? </div>
        <div className={classes.bodyContainer}>
          <div className={classes.rowContainer}>
            {" "}
            <div className={classes.albumContainer}>
              <div className={classes.albumOne}></div>
            </div>
            <div className={classes.albumNameContainer}>
              <div className={classes.albumName}>Tyler, the Creator</div>
            </div>
          </div>
          <div className={classes.rowContainer}>
            {" "}
            <div className={classes.albumContainer}>
              <div className={classes.albumTwo}></div>
            </div>
            <div className={classes.albumNameContainer}>
              <div className={classes.albumName}>Mac Miller</div>
            </div>
          </div>
          <div className={classes.rowContainer}>
            {" "}
            <div className={classes.albumContainer}>
              <div className={classes.albumThree}></div>
            </div>
            <div className={classes.albumNameContainer}>
              <div className={classes.albumName}>Kendrick Lamar</div>
            </div>
          </div>
        </div>
        <div className={classes.instructionsText}>Swipe to Vote</div>
      </Card>
    </div>
  );
};

export default VoteCardHomePage;
