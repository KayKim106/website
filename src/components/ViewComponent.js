import React from "react";

const ViewComponent = (props) => {
  const { containerName } = props;
  return (
    <section
      id={containerName}
      className={`section-${containerName} ${
        containerName !== "header" && containerName !== "footer"
          ? "container"
          : ""
      }`}
    >
      {props.children}
    </section>
  );
};

export default ViewComponent;
