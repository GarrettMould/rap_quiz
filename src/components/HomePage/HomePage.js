import classes from "./HomePage.module.css";
import Media from "react-media";
import HomePageMessage from "../../elements/HomePageMessage/HomePageMessage";
import KanyeLogo from "../../elements/KanyeLogo/KanyeLogo";
import AlbumBanner from "../../elements/AlbumBanner/AlbumBanner";
import AlbumLines from "../../Images/AlbumLines.svg";
import AlbumLinesPNG from "../../Images/AlbumLines.png";
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
              <img src={YeezusTheme}></img>
            </div>
          </>
        ) : (
          <>
            <div className={classes.containerDesktop}>
              <div className={classes.rowOne}>
                <HomePageMessage startGame={props.startGame}></HomePageMessage>
                <img src={YeezusThemeDesktop}></img>
              </div>
            </div>
          </>
        )
      }
    </Media>
  );
};

export default HomePage;
