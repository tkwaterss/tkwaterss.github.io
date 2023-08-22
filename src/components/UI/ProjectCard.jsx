import React from "react";
import Button from "../UI/Button";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({className, src, projectTitle, projectDescription, frontEnd, backEnd, demoURL, appURL, gitHubURL}) => {
  return (
    <div className={`${classes.projectCard} ${className}`}>
      <img src={src} className={classes.projectBanner} alt={projectTitle}></img>
      <div className={classes.contentContainer}>
        <div className={classes.descriptionContainer}>
          <h3>{projectTitle}</h3>
          <p>{projectDescription}</p>
          <div className={classes.stackContainer}>
            <p>Front End: {frontEnd}</p>
            {backEnd && <p>Back End: {backEnd} </p>}
          </div>
        </div>
        <div className={classes.buttonContainer}>
          {demoURL && (
            <a href={demoURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>Demo</Button>
            </a>
          )}
          {appURL && (
            <a href={appURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>App</Button>
            </a>
          )}
          {gitHubURL && (
            <a href={gitHubURL} rel="noopener noreferrer" target="_blank">
              <Button className={classes.linksBtn}>GitHub</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
