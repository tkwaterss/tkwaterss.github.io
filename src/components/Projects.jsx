import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "./UI/ProjectCard";
import cycleMate from "../images/Cycle-Mate.png";
import bicycleBandits from "../images/Bicycle-Bandits.png";

const Projects = () => {
  return (
    <section className={classes.section}>
      <ProjectCard
        src={bicycleBandits}
        projectTitle="Bicycle Bandits | Personal Project"
        projectDescription="A bicycle shop management app combinging services for both employees and customers. The app provides service ticket management for employees as well as online shopping and service transparency for customers. This app took lessons learned from developing Cycle Mate and improved upon those elements as well as adding numerous additional features."
        frontEnd={["React | ", "CSS"]}
        backEnd={["Node.js | ", "Express | ", "PostgreSQL | ", "Sequelize"]}
        demoURL="https://www.youtube.com/watch?v=Rw1oUMVaRDo&ab_channel=TobinWaters"
        appURL="https://bicycle-bandits.herokuapp.com/"
        gitHubURL="https://github.com/tkwaterss/Bicycle_Bandits"
      ></ProjectCard>

      <ProjectCard
        src={cycleMate}
        projectTitle="Cycle Mate | Personal Project"
        projectDescription="Cycle Mate is a service tracking app. This app is designed to help a bike shop manage service tickets efficiently. Tickets can be viewed, created, updated, and deleted on a user friendly platform."
        frontEnd={["Javascript | ", "HTML |  ", "CSS"]}
        backEnd={["Node.js | ", "Express | ", "PostgreSQL"]}
        gitHubURL="https://github.com/tkwaterss/Cycle_Mate"
      ></ProjectCard>
    </section>
  );
};

export default Projects;
