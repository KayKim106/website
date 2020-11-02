import React, { useEffect, useState } from "react";
import ViewComponent from "../components/ViewComponent";
import MenuLink from "../components/Nav/MenuLink";

// Menu list
import menuList from "../json/menu";

const HeaderContainer = ({ containerName, windowWidth }) => {
  const [menuToggle, setMenuToggle] = useState(
    windowWidth <= 768 ? true : false
  );

  const handleToggleMenu = (bool) => {
    windowWidth <= 768 ? setMenuToggle(!bool) : setMenuToggle(false);
  };
  if (windowWidth > 768 && menuToggle) {
    setMenuToggle(false);
  }
  return (
    <ViewComponent containerName={containerName}>
      <nav className="navBar">
        <div className="navBarLogo">
          <i className="fab fa-accusoft"></i>
        </div>
        <ul
          className="navBarMenu"
          style={{ display: menuToggle ? "none" : "flex" }}
        >
          {menuList &&
            menuList.map((item, i) => {
              return <MenuLink menuName={item.name} key={i} />;
            })}
        </ul>

        <div
          className="navBarToggleBtn"
          onClick={(e) => handleToggleMenu(menuToggle)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </ViewComponent>
  );
};

export default HeaderContainer;
