import { Container, Button } from "react-bootstrap";
import classes from "./HomePageNav.module.css";
const HomePageNav = (props) => {
  return (
    <div className={classes.container}>
      <ul className="d-flex justify-content-between align-items-center mb-0">
        <a href="#">
          <li className={classes.navItem}>About</li>
        </a>
        <a href="#">
          <li className={classes.navItem}>Donate</li>
        </a>
        <li>
          <Button className={classes.button}>How to Play</Button>
        </li>
      </ul>
    </div>
  );
};

export default HomePageNav;
