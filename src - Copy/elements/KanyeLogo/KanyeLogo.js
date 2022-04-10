import classes from "./KanyeLogo.module.css";

import kanyeLogo from "../../Images/kanye_logo.png";

const KanyeLogo = (props) => {
  return (
    <div>
      <img className={classes.image} src={kanyeLogo}></img>
    </div>
  );
};

export default KanyeLogo;
