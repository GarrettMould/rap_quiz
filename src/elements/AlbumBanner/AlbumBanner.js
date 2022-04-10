import classes from "./AlbumBanner.module.css";
import { Container, Row, Col } from "react-bootstrap";

import { catalog_kanye_west } from "../../Sharede/Shared";

var catalogKanyeWest = catalog_kanye_west;

const AlbumBanner = (props) => {
  const albums = catalogKanyeWest.map((album, i) => {
    return (
      <div>
        <img className={classes.album} src={album}></img>
      </div>
    );
  });
  return <div className={classes.imageWrapper}>{albums}</div>;
};

export default AlbumBanner;
