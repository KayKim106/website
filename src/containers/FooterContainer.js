import React from "react";
import ViewComponent from "../components/ViewComponent";

const FooterContainer = ({ containerName }) => {
  return (
    <ViewComponent containerName={containerName}>
      @ COPYRIGHT 2019 BY KAY KIM
    </ViewComponent>
  );
};

export default FooterContainer;
