import classes from "./HomePage.module.css";
import Media from "react-media";
import HomePageMessage from "../../elements/HomePageMessage/HomePageMessage";
import KanyeLogo from "../../elements/KanyeLogo/KanyeLogo";
import AlbumBanner from "../../elements/AlbumBanner/AlbumBanner";
import AlbumLines from "../../Images/AlbumLines.svg";
import AlbumLinesPNG from "../../Images/AlbumLines.png";
import HeaderBorder from "../../elements/HeaderBorder/HeaderBorder";

const HomePage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <>
            <HeaderBorder></HeaderBorder>
            <div className={classes.container}>
              <div className={classes.rowOne}>
                <HomePageMessage startGame={props.startGame}></HomePageMessage>
              </div>
              <img src={AlbumLinesPNG}></img>
            </div>
          </>
        ) : (
          <div className={classes.container}>
            <div className={classes.rowOne}>
              <HomePageMessage startGame={props.startGame}></HomePageMessage>
              <KanyeLogo></KanyeLogo>
            </div>
          </div>
        )
      }
    </Media>
  );
};

export default HomePage;
