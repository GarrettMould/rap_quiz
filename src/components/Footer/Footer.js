import { Container, Navbar } from "react-bootstrap";
import Media from "react-media";
import { Link } from "react-router-dom";
import { GithubLogo, DribbbleLogo } from "phosphor-react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <Container>
              <Navbar className={classes.navbarHeaderMobile}>
                <Link to="/">
                  <div className={classes.attributionMobile}>
                    Created by Garrett Mould
                  </div>
                </Link>
                <div className={classes.footerIcons}>
                  <div className={classes.iconMobile}>
                    <GithubLogo size={20}></GithubLogo>
                  </div>
                  <div className={classes.iconMobile}>
                    <DribbbleLogo size={20}></DribbbleLogo>
                  </div>
                </div>
              </Navbar>
            </Container>
          ) : (
            <Container>
              <Navbar className={classes.navbarHeader}>
                <Link to="/">
                  <div className={classes.attribution}>
                    Created by Garrett Mould
                  </div>
                </Link>
                <div className={classes.footerIcons}>
                  <div className={classes.icon}>
                    <GithubLogo size={30}></GithubLogo>
                  </div>
                  <div className={classes.icon}>
                    <DribbbleLogo size={30}></DribbbleLogo>
                  </div>
                </div>
              </Navbar>
            </Container>
          )
        }
      </Media>
    </div>
  );
};

export default Footer;
