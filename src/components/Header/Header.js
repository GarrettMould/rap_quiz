import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-media";
import classes from "./Header.module.css";

import HomePageNav from "../../elements/HomePageNav/HomePageNav";

const Header = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <div className={classes.containerMobile}>
            <Navbar className={classes.navbarHeader}>
              <Link to="/">
                <div className={classes.siteTitleMobile}>{props.siteTitle}</div>
              </Link>
              <HomePageNav></HomePageNav>
            </Navbar>
          </div>
        ) : (
          <div className={classes.containerDesktop}>
            <Navbar className={classes.navbarHeader}>
              <Link to="/">
                <div className={classes.siteTitle}>{props.siteTitle}</div>
              </Link>
              <HomePageNav></HomePageNav>
            </Navbar>
          </div>
        )
      }
    </Media>
  );
};

export default Header;
