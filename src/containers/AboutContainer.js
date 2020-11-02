import React from "react";
import ViewComponent from "../components/ViewComponent";

const AboutContainer = ({ containerName }) => {
  return (
    <ViewComponent containerName={containerName}>{containerName}</ViewComponent>
  );
};

export default AboutContainer;
