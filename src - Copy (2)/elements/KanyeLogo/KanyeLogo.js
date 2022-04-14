import classes from "./KanyeLogo.module.css";
import Media from "react-media";

import kanyeLogo from "../../Images/kanye_logo.png";

const KanyeLogo = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div>
            <img className={classes.imageMobile} src={kanyeLogo}></img>
          </div>
        ) : (
          <div>
            <img className={classes.image} src={kanyeLogo}></img>
          </div>
        )
      }
    </Media>
  );
};

export default KanyeLogo;
