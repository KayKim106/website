import React, { useState, useEffect, useRef } from "react";
import HomeContainer from "./containers/HomeContainer";
import ProjectsContainer from "./containers/ProjectsContainer";
import ContactContainer from "./containers/ContactContainer";
import SkillsContainer from "./containers/SkillsContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import AboutContainer from "./containers/AboutContainer";
import HeaderContainer from "./containers/HeaderContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(true);
  const [pageUpArray, setPageUpArray] = useState([]);
  const [pageDownArray, setPageDownArray] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", (e) => setWindowWidth(window.innerWidth));
    setPageScrollList();

    window.onscroll = function (e) {
      let asideBar = document.querySelector(".sci-aside-wrapper");
      let header = document.querySelector("header");
      let footer = document.querySelector("footer");

      if (
        window.innerHeight + window.scrollY + footer.clientHeight / 2 >=
        document.body.offsetHeight
      ) {
        asideBar.style.height = `calc(100vh - (${
          header.clientHeight + footer.clientHeight
        }px))`;
        asideBar.style.transition = "height 250ms";
        asideBar.style.marginTop = "0";
      } else {
        asideBar.style.height = `calc(100vh - (${header.clientHeight}px + 2rem))`;
        asideBar.style.transition = "height 250ms";
      }

      // Adding Header
      if (window.scrollY > 0) {
        header.style.boxShadow = "0 0 10px lightgray";
        header.style.transition = "box-shadow 250ms ease-in";
      } else {
        header.style.boxShadow = "none";
      }
    };
  }, []);

  const setPageScrollList = () => {
    // get page List
    let pageArr = document.querySelectorAll(".container");
    let tempArr = [];
    for (const page of pageArr) {
      let sec = {
        name: page.className,
        height: page.clientHeight,
      };
      tempArr.push(sec);
    }
    setPageUpArray(tempArr);
  };
  const updateScrollY = (e) => {
    let sectionElm = document.querySelector(".container");
    let sectionElmAllCount = document.querySelectorAll(".container").length - 1;
    let scrollValue;

    let sectionArr = [];
    // Adding each section's page info
    for (const section of document.querySelectorAll(".container")) {
      let sec = {
        name: section.className,
        height: section.clientHeight,
      };
      sectionArr.push(sec);
    }
    //@todo
    // repalce sectionElm.clientHeight by sec.height
    if (e.deltaY > 0) {
      if (scrollY < sectionElm.clientHeight * sectionElmAllCount) {
        scrollValue = scrollY + sectionElm.clientHeight;
      } else {
        scrollValue = sectionElm.clientHeight * sectionElmAllCount;
      }
    } else if (e.deltaY < 0) {
      if (scrollY > 0) {
        scrollValue =
          scrollY - sectionElm.clientHeight >= 0
            ? scrollY - sectionElm.clientHeight
            : 0;
      } else {
        scrollValue = 0;
      }
    }

    if (active) {
      setActive(false);
      setScrollY(scrollValue);
      scrollTo(scrollValue);
    }
  };
  const scrollTo = (scrollY) => {
    // window.scroll({
    //   top: scrollY,
    //   behavior: "smooth",
    // });
  };
  useEffect(() => {
    if (active && windowWidth > 750) {
      window.addEventListener("wheel", updateScrollY);
      return () => window.removeEventListener("wheel", updateScrollY);
    } else {
      setTimeout(() => {
        setActive(true);
      }, 1000);
    }
  }, [scrollY, active]);
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header-container">
          <HeaderContainer containerName={"header"} windowWidth={windowWidth} />
        </header>
        {/* Main Route Section */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomeContainer containerName={"home"} />;
            }}
          />
          <Route
            path="/:containerName"
            render={({ match, location }) => {
              const { containerName } = match.params;

              let renderContainerName = `${containerName.toLowerCase()}Container`;

              switch (renderContainerName) {
                case "homeContainer":
                  return (
                    <HomeContainer
                      containerName={containerName.toLowerCase()}
                    />
                  );
                case "projectContainer":
                  return (
                    <ProjectsContainer
                      containerName={containerName.toLowerCase()}
                    />
                  );
                case "contactContainer":
                  return (
                    <ContactContainer
                      containerName={containerName.toLowerCase()}
                    />
                  );
                case "skillContainer":
                  return (
                    <SkillsContainer
                      containerName={containerName.toLowerCase()}
                    />
                  );
                case "aboutContainer":
                  return (
                    <AboutContainer
                      containerName={containerName.toLowerCase()}
                    />
                  );
                default:
                  return <PageNotFound containerName={"PageNotFound"} />;
              }
            }}
          />
        </Switch>
        {/* Footer Section */}
        <footer style={{ padding: "1rem 0" }}>
          <FooterContainer containerName={"footer"} />
        </footer>
      </div>
    </Router>
  );
}

export default App;
