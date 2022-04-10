import classes from "./HomePage.module.css";

import HomePageMessage from "../../elements/HomePageMessage/HomePageMessage";
import KanyeLogo from "../../elements/KanyeLogo/KanyeLogo";
import AlbumBanner from "../../elements/AlbumBanner/AlbumBanner";

const HomePage = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.rowOne}>
        <HomePageMessage startGame={props.startGame}></HomePageMessage>
        <KanyeLogo></KanyeLogo>
      </div>
      <AlbumBanner catalogKanyeWest={props.catalogKanyeWest}></AlbumBanner>
    </div>
  );
};

export default HomePage;
