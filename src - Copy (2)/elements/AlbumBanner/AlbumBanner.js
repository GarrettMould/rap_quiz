import classes from "./AlbumBanner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Media from "react-media";
import { catalog_kanye_west } from "../../Sharede/Shared";

var catalogKanyeWest = catalog_kanye_west;

var catalogKanyeWestDesktop = catalogKanyeWest.slice(0, 10);

const AlbumBanner = (props) => {
  const albumsMobile = catalogKanyeWest.map((album, i) => {
    return (
      <div>
        <img className={classes.albumMobile} src={album}></img>
      </div>
    );
  });

  const albumsDesktop = catalogKanyeWestDesktop.map((album, i) => {
    return (
      <div>
        <img className={classes.albumDesktop} src={album}></img>
      </div>
    );
  });

  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.imageWrapper}>{albumsMobile}</div>
        ) : (
          <div className={classes.imageWrapper}>{albumsDesktop}</div>
        )
      }
    </Media>
  );
};

export default AlbumBanner;
