import { Container, Button } from "react-bootstrap";
import { List } from "phosphor-react";
import Media from "react-media";
import classes from "./HomePageNav.module.css";
const HomePageNav = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.containerMobile}>
            <ul className="d-flex justify-content-end align-items-center mb-0">
              <List size={30} />
            </ul>
          </div>
        ) : (
          <div className={classes.container}>
            <ul className="d-flex justify-content-around align-items-center mb-0">
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
        )
      }
    </Media>
  );
};

export default HomePageNav;
