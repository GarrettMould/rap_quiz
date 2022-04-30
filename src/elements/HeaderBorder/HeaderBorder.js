import SoundWave from "../../Images/SoundWave.svg";
import classes from "./HeaderBorder.module.css";

const HeaderBorder = (props) => {
  return (
    <div className={classes.container}>
      <img src={SoundWave}></img>
    </div>
  );
};

export default HeaderBorder;
