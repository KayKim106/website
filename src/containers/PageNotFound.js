import React from "react";
import ViewComponent from "../components/ViewComponent";

const PageNotFound = ({ containerName }) => {
  return <ViewComponent containerName={containerName}>{containerName}</ViewComponent>;
};

export default PageNotFound;
