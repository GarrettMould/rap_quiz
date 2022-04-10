import React from "react";
import { Routes, Route } from "react-router-dom";
import { Howl, Howler } from "howler";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./app.module.css";

import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import PlayPage from "../components/PlayPage/PlayPage";
import Footer from "../components/Footer/Footer";

import { questions } from "../Sharede/Shared";
import KanyeWestBound2 from "../Audio/Kanye_West_Bound_2.mp3";

class App extends Component {
  state = {
    siteTitle: "Rap Quiz",
    questions: questions,
    display: "startMenu",
  };

  render() {
    return (
      <div className={classes.app}>
        <Header siteTitle={this.state.siteTitle}></Header>
        <PlayPage
          round={this.state.round}
          startGame={this.state.startGame}
          soundPlay={this.soundPlay}
          nextRound={this.nextRound}
          question={this.state.questions}
        ></PlayPage>
        <HomePage
          startGame={this.state.startGame}
          catalogKanyeWest={this.state.catalogKanyeWest}
        ></HomePage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
