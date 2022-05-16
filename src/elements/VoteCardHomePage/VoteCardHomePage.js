import { Card } from "react-bootstrap";
import Media from "react-media";

import VoteCardButton from "../VoteCardButton/VoteCardButton";
import classes from "./VoteCardHomePage.module.css";
const VoteCardHomePage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
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
        ) : (
          <div className={classes.container}>
            <Card className={classes.voteCard}>
              <div className={classes.voteCardTitleDesktop}>Rap Quiz V2? </div>
              <div className={classes.bodyContainer}>
                <div className={classes.rowContainer}>
                  {" "}
                  <div className={classes.albumContainer}>
                    <div className={classes.albumOneDesktop}></div>
                  </div>
                  <div className={classes.albumNameContainer}>
                    <div className={classes.albumNameDesktop}>
                      Tyler, the Creator
                    </div>
                  </div>
                </div>
                <div className={classes.rowContainer}>
                  {" "}
                  <div className={classes.albumContainer}>
                    <div className={classes.albumTwoDesktop}></div>
                  </div>
                  <div className={classes.albumNameContainer}>
                    <div className={classes.albumNameDesktop}>Mac Miller</div>
                  </div>
                </div>
                <div className={classes.rowContainer}>
                  {" "}
                  <div className={classes.albumContainer}>
                    <div className={classes.albumThreeDesktop}></div>
                  </div>
                  <div className={classes.albumNameContainer}>
                    <div className={classes.albumNameDesktop}>
                      Kendrick Lamar
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )
      }
    </Media>
  );
};

export default VoteCardHomePage;
