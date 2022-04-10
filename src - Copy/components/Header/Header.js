import { Container, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";

import HomePageNav from "../../elements/HomePageNav/HomePageNav";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <Navbar className={classes.navbarHeader}>
          <div className={classes.siteTitle}>{props.siteTitle}</div>
          <HomePageNav></HomePageNav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
