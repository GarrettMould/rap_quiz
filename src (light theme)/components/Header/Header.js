import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-media";
import classes from "./Header.module.css";

import HomePageNav from "../../elements/HomePageNav/HomePageNav";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <Navbar className={classes.navbarHeader}>
                <Link to="/">
                  <div className={classes.siteTitleMobile}>
                    {props.siteTitle}
                  </div>
                </Link>
                <HomePageNav></HomePageNav>
              </Navbar>
            ) : (
              <Navbar className={classes.navbarHeader}>
                <Link to="/">
                  <div className={classes.siteTitle}>{props.siteTitle}</div>
                </Link>
                <HomePageNav></HomePageNav>
              </Navbar>
            )
          }
        </Media>
      </Container>
    </div>
  );
};

export default Header;
