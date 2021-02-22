import React from "react";
const Card = ({ url, projectName, projectText, addProjectRefs }) => {
  return (
    <div
      className="card-wrapper"
      ref={(el) => (el = addProjectRefs(el))}
    >
      {/* <img className="card-image" src={url} alt="test" />
      <div className="card-detail">
        <header className="card-header">{projectName}</header>
        <p className="card-content">{projectText}</p>
        <div className="card-text-nav">
          <h5>Click this</h5>
          <div className="card-next-btn"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
