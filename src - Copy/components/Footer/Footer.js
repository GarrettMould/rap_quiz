import { Container } from "react-bootstrap";
import { GithubLogo, DribbbleLogo } from "phosphor-react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <div className="d-flex justify-content-between">
          <div className={classes.attribution}>Created by Garrett Mould</div>
          <div className="d-flex">
            <div>
              <GithubLogo size={30}></GithubLogo>
            </div>
            <div>
              <DribbbleLogo size={30}></DribbbleLogo>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
