import React from "react";
import ViewComponent from "../components/ViewComponent";

const SkillsContainer = ({containerName}) => {
  return <ViewComponent containerName={containerName}>Hello {containerName}</ViewComponent>;
};

export default SkillsContainer;
