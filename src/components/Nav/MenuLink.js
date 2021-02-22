import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ menuName }) => {
  return (
    <li>
      {/* <Link to={`#${menuName}`}>{menuName.toUpperCase()} </Link> */}
      <a href={`#${menuName}`} onClick={(e)=>{console.log("clicked")}}>{menuName.toUpperCase()} </a>
    </li>
  );
};
export default MenuLink;
