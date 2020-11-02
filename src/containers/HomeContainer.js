import React, { Suspense, useEffect } from "react";
// Component
import Card from "../components/Card";
// import backgroundImage from "../images/backgrounds/home_background.png";
import HomeBackground from "../images/home_background.jpg";
//JSON
import Projects from "../json/project";
import ViewComponent from "../components/ViewComponent";
import InfoCard from "../components/InfoCard";
import AsideContainer from "../containers/AsideContainer";
import projectImage2 from "../images/project_2.jpg";
import skills from "../json/skills";

const HomeContainer = ({ containerName, asideRef }) => {
  return (
    <React.Fragment>
      {/* Home Section */}
      <div className="main-wrapper">
        <AsideContainer asideRef={asideRef} />
        <div className="home-main-wrapper">
          {/* Home Page */}
          <ViewComponent containerName={"home"}>
            <div className="home-banner">
              <div className="home-overlay-text">
                <article className="home-overlay-article">
                  <header
                    className="home-title"
                    style={{ fontSize: "3rem", fontWeight: "400" }}
                  >
                    Front End Developer
                  </header>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "cetner",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa fa-play"
                      style={{ fontSize: "3rem" }}
                      aria-hidden="true"
                    ></i>
                    <h1
                      style={{
                        fontSize: "6rem",
                        margin: "0 0 0 1rem",
                      }}
                    >
                      Kay Kim
                    </h1>
                  </div>
                  <span>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "1rem 0",
                        fontSize: "1.78rem",
                        margin: 0,
                      }}
                    >
                      <li>Innovation</li>
                      <li className="centerText">Solutions</li>
                      <li>Passions</li>
                    </ul>
                  </span>

                  <div
                    className="banner-text-nav"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        flex: 4,
                        textAlign: "right",
                        height: "5rem",
                        lineHeight: "5rem",
                        marginRight: "1.5rem",
                      }}
                    >
                      {" "}
                      Begin Your Journey
                    </p>
                    <div
                      className="linkIconWrapper"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flex: 2,
                        cursor: "pointer",
                      }}
                      onClick={(e) => console.log("page Redirection")}
                    >
                      <div
                        className="directLine"
                        style={{
                          background: "black",
                          width: "100%",
                          height: "2px",
                          position: "relative",
                          left: "10px",
                        }}
                      ></div>

                      <div
                        className="home-next-btn"
                        style={{
                          width: "2.5em",
                          height: "2em",
                          position: "relative",
                          border: "1px solid black",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    {/* </span> */}
                  </div>
                </article>
              </div>
              <div className="home-overlay-image">
                <img
                  style={{
                    height: "100%",
                  }}
                  alt={"home_banner_image"}
                  src={`${HomeBackground}`}
                ></img>
              </div>
              {/* <div className="home-text" style={{height:"calc(100vh - (80px + 2rem))", width:"100%", background:"red"}}></div> */}
              {/* <div
                claaName="home-banner-overlay"
                style={{
                  background: "blue",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              > */}
              {/* */}
              {/* </div> */}
              {/* <article className="home-banner-text">
                <header className="banner-text-header">AMBITIOUS</header>
                <p className="banner-text-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                
              </article> */}
              {/* */}
            </div>
          </ViewComponent>
          {/* About Page */}
          <ViewComponent containerName={"about"}>
            <div className="about-wrapper">
              <div className="about-text-wrapper">
                <article className="about-text-box">
                  <div className="about-header">
                    <div className="about-face"></div>
                    <span>
                      by <b>Kay Kim</b>
                    </span>
                  </div>
                  <header className="about-title"> AN DE PORTZAMPARC</header>
                  <p className="about-detail">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </p>
                  <div className="about-text-nav">
                    <h5>Click this</h5>
                    <div className="about-next-btn"></div>
                  </div>
                </article>
              </div>
              <div className="about-image-wrapper">img</div>
            </div>
          </ViewComponent>
          <ViewComponent containerName={"skill"}>
            <div className="skill-wrapper">
              <div className="expertise-box">Expertise</div>
              <div className="skill-list-box">
                <div className="skill-list-left">
                  <ul>
                    {skills &&
                      skills[0].map((skill, i) => {
                        return (
                          <li key={i} className={`skill ${skill.name}`}>
                            {skill.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="skill-list-right">
                  <ul>
                    {skills &&
                      skills[1].map((skill, i) => {
                        return (
                          <li key={i} className={`skill_${skill.name}`}>
                            {skill.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </ViewComponent>
          {/* Project Page */}
          <ViewComponent containerName={"project"}>
            <div className="project-wrapper">
              {Projects &&
                Projects.map((project, i) => {
                  return (
                    <Card
                      url={project.url}
                      projectName={project.name}
                      projectText={project.text}
                      key={i}
                    />
                  );
                })}
            </div>
          </ViewComponent>
          {/* Contact Page */}
          <ViewComponent containerName={"contact"}>
            <div className="contact-wrapper">
              <div className="contact-form-wrapper">
                <div className="contact-form-left">
                  <article className="contact-form-header">
                    <header className="form-header">Get in Touch</header>
                    <p className="form-header-text">
                      Please pill out the quick form
                    </p>
                  </article>
                  <div className="contact-form-info">
                    <input type="text" className="name" placeholder="Name" />
                    <input
                      type="email"
                      className="email"
                      placeholder="Your Email Address"
                    />
                    <textarea placeholder="Message" />
                    <button className="contact-form-submit">SUBMIT</button>
                  </div>
                </div>
                <div className="contact-form-right">
                  <InfoCard />
                  <InfoCard />
                </div>
              </div>
            </div>
          </ViewComponent>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContainer;
