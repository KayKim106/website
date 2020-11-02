import React from "react";
import ViewComponent from "../components/ViewComponent";

const ProjectsContainer = ({containerName}) => {
  return (
  <ViewComponent containerName={containerName}>Hello {containerName}</ViewComponent>
  );
};

export default ProjectsContainer;
