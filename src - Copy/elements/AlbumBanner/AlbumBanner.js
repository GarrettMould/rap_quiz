import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./AlbumBanner.module.css";

import { catalog_kanye_west } from "../../Sharede/Shared";

var catalogKanyeWest = catalog_kanye_west;

const AlbumBanner = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
    },
  };
  const albums = catalogKanyeWest.map((album, i) => {
    return (
      <div>
        <img className={classes.album} src={album}></img>
      </div>
    );
  });
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      infinite={false}
      responsive={responsive}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      autoPlay={false}
    >
      {albums}
    </Carousel>
  );
};

export default AlbumBanner;
