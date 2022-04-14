import classes from "./HomePage.module.css";
import Media from "react-media";
import HomePageMessage from "../../elements/HomePageMessage/HomePageMessage";
import KanyeLogo from "../../elements/KanyeLogo/KanyeLogo";
import AlbumBanner from "../../elements/AlbumBanner/AlbumBanner";

const HomePage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.container}>
            <div className={classes.rowOne}>
              <HomePageMessage startGame={props.startGame}></HomePageMessage>
            </div>
            <AlbumBanner
              catalogKanyeWest={props.catalogKanyeWest}
            ></AlbumBanner>
          </div>
        ) : (
          <div className={classes.container}>
            <div className={classes.rowOne}>
              <HomePageMessage startGame={props.startGame}></HomePageMessage>
              <KanyeLogo></KanyeLogo>
            </div>
            <AlbumBanner
              catalogKanyeWest={props.catalogKanyeWest}
            ></AlbumBanner>
          </div>
        )
      }
    </Media>
  );
};

export default HomePage;
