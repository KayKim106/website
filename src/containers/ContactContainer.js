import React from "react";
import ViewComponent from "../components/ViewComponent";

const ContactContainer = ({containerName}) => {
  return <ViewComponent containerName={containerName}>Hello {containerName}</ViewComponent>;
};

export default ContactContainer;
