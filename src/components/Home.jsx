import React from "react";
import classes from "./Home.module.css";
import portrait from "../images/River-Profile.jpg";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home-section" className={classes.section}>
      <div className={classes.homeLeft}>
        <div className={classes.introduction}>
          <h4>Hi, my name is,</h4>
          <h1>Tobin Waters.</h1>
          <h2>Full Stack Engineer</h2>
          <p>Currently based out of Salt Lake City, Utah</p>
          <p>I specialize in building single page React Applications</p>
        </div>
        <Link to="/projects">
          <Button>Check out my projects!</Button>
        </Link>
      </div>
      <div className={classes.homeRight}>
        <img src={portrait} alt="Tobin" />
      </div>
    </section>
  );
};

export default Home;
