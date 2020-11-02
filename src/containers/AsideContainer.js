import React from "react";

const AsideContainer = () => {
  const sciList = [
    { name: "instagram" },
    { name: "github" },
    { name: "linkedin-in" },
  ];
  return (
    <div className="sci-aside-wrapper">
      <div className="sci-container">
        <ul className="sci-icons">
          {sciList &&
            sciList.map((icon, key) => {
              return (
                <li className={`sci-temp`} key={key}>
                  <i className={`fab fa-${icon.name}`}></i>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default AsideContainer;
