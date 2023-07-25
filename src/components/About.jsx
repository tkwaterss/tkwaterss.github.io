import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.section}>
      <p className={classes.aboutMe}>
        I am a talented Full-stack React / Node.js developer based in Salt Lake
        City, UT, specializing in creating software solutions that tackle
        distinctive business challenges while crafting visually stunning user
        interfaces. With a combined background in Engineering and Management, I
        bring a diverse range of problem-solving techniques to my work. My drive
        and eagerness to continuously expand my skill set enable me to provide
        the utmost quality in solutions.
      </p>
      <br />
      <p className={classes.aboutMe}>
        When I'm not coding, you'll find me exploring the great outdoors through
        activities like rock-climbing, mountain biking, and hiking in the
        beautiful Wasatch Mountains.
      </p>
    </section>
  );
};

export default About;
