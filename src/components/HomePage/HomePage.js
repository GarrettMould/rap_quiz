import classes from "./HomePage.module.css";
import Media from "react-media";
import HomePageMessage from "../../elements/HomePageMessage/HomePageMessage";
import VoteSection from "../VoteSection/VoteSection";
import YeezusTheme from "../../Images/YeezusTheme.svg";
import YeezusThemeDesktop from "../../Images/YeezusThemeDesktop.svg";

const HomePage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <>
            <div className={classes.container}>
              <div className={classes.rowOne}>
                <HomePageMessage startGame={props.startGame}></HomePageMessage>
              </div>
              <VoteSection></VoteSection>
            </div>
          </>
        ) : (
          <>
            <div className={classes.containerDesktop}>
              <div className={classes.rowOne}>
                <HomePageMessage startGame={props.startGame}></HomePageMessage>
                <VoteSection></VoteSection>
              </div>
            </div>
          </>
        )
      }
    </Media>
  );
};

export default HomePage;
