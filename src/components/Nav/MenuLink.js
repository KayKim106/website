import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ menuName }) => {
  return (
    <li>
      <Link to={`${menuName}`}>{menuName.toUpperCase()} </Link>
    </li>
  );
};
export default MenuLink;
