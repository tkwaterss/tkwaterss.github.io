import React from "react";
import Button from "../UI/Button";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={`${classes.projectCard} ${props.className}`}>
      <img src={props.src} className={classes.projectBanner}></img>
      <div className={classes.contentContainer}>
        <div className={classes.descriptionContainer}>
          <h3>{props.projectTitle}</h3>
          <p>{props.projectDescription}</p>
          <div className={classes.stackContainer}>
            <p>Front End: {props.frontEnd}</p>
            <p>Back End: {props.backEnd} </p>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          {props.demoURL && (
            <a href={props.demoURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>Demo</Button>
            </a>
          )}
          {props.appURL && (
            <a href={props.appURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>App</Button>
            </a>
          )}
          {props.gitHubURL && (
            <a href={props.gitHubURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>GitHub</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
