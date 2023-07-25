import React from "react";
import classes from "./Skills.module.css";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoGit,
} from "react-icons/bi";
import { SiSequelize } from "react-icons/si";

const Skills = () => {
  return (
    <section className={classes.section}>
      <div className={classes.gridContainer}>
        <div className={`${classes.react} ${classes.iconContainer}`}>
          <a
            href="https://www.w3schools.com/whatis/whatis_react.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoReact className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
        <div className={`${classes.redux} ${classes.iconContainer}`}>
          <a
            href="https://medium.com/swlh/what-is-redux-b16b42b33820"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoRedux className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
        <div className={`${classes.postgreSQL} ${classes.iconContainer}`}>
          <a
            href="https://www.postgresql.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoPostgresql
              className={classes.icon}
              size="5rem"
              color="#012877"
            />
          </a>
        </div>
        <div className={`${classes.nodeJS} ${classes.iconContainer}`}>
          <a
            href="https://www.w3schools.com/nodejs/nodejs_intro.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoNodejs
              className={classes.icon}
              size="5rem"
              color="#012877"
            />
          </a>
        </div>
        <div className={`${classes.javascript} ${classes.iconContainer}`}>
          <a
            href="https://www.w3schools.com/whatis/whatis_js.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoJavascript
              className={classes.icon}
              size="5rem"
              color="#012877"
            />
          </a>
        </div>
        <div className={`${classes.html} ${classes.iconContainer}`}>
          <a
            href="https://www.w3schools.com/whatis/whatis_html.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoHtml5 className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
        <div className={`${classes.css} ${classes.iconContainer}`}>
          <a
            href="https://www.w3schools.com/whatis/whatis_css.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoCss3 className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
        <div className={`${classes.sequelize} ${classes.iconContainer}`}>
          <a
            href="https://medium.com/the-javascript-dojo/introduction-to-sequelize-1cbfc2d2d1bf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiSequelize className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
        <div className={`${classes.git} ${classes.iconContainer}`}>
          <a
            href="https://git-scm.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoGit className={classes.icon} size="5rem" color="#012877" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
