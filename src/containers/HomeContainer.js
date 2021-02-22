import React, { Suspense, useEffect, useRef } from "react";
// Component
import Card from "../components/Card";
// import backgroundImage from "../images/backgrounds/home_background.png";
import HomeBackground from "../images/home_background.jpg";
//JSON
import Projects from "../json/project";
import ViewComponent from "../components/ViewComponent";
import InfoCard from "../components/InfoCard";
import AsideContainer from "../containers/AsideContainer";
import kay from "../images/kay_kim.png";
import skills from "../json/skills";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);
const HomeContainer = ({ containerName }) => {
  let mainWrapperRef = useRef(null);
  let homeBannerText = useRef(null);
  let aboutImageRef = useRef(null);
  let projectWrapperRef = useRef(null);
  let skillWrapperRef = useRef(null);
  let skillsRef = useRef(null);
  let profileImageRef = useRef(null);
  let contactFormRef = useRef(null);
  skillsRef = [];
  let projectsRef = useRef(null);
  projectsRef = [];

  useEffect(() => {
    // Assign projet ref
    gsap.to(mainWrapperRef, 0.5, {
      autoAlpha: 1,
      ease: Power3.easeInOut,
      duration: 0.5,
      delay: 0.5,
    });

    gsap.to(homeBannerText, 0.5, {
      autoAlpha: 1,
      ease: Power3.easeInOut,
      duration: 1,
      delay: 0.8,
      x: window.innerWidth > 1024 ? "-5%" : "0",
      y: window.innerWidth < 1024 ? "-5%" : "0",
    });

    gsap.to(aboutImageRef, 0.5, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "linear",
      scrollTrigger: {
        trigger: aboutImageRef,
        start: "top 50%",
        end: "bottom 20%",
        // onEnter onLevae onEnterBack onLeaveBack
        // toggleActions: "restart none reverse reset",
      },
    });

    skillsRef.forEach((li, i) => {
      gsap.to(li, 0.15 * i, {
        autoAlpha: 1,
        ease: Power3.easeInOut,
        x: "-1.5rem",
        duration: 0.15 * i,
        delay: 0.5,
        scrollTrigger: {
          trigger: skillWrapperRef,
          toggleActions: "restart none reverse reset",
          start: "top 50%",
        },
      });
    });
    projectsRef.forEach((project, i) => {
      // gsap.to(li, 0.15 * i, {
      //   autoAlpha: 1,
      //   ease: Power3.easeInOut,
      //   x: "-1.5rem",
      //   duration: 0.15 * i,
      //   delay: 0.5,
      //   scrollTrigger: {
      //     trigger: skillWrapperRef,
      //     toggleActions: "restart none reverse reset",
      //     start: "top 10%",
      //   },
      // });
      gsap.to(project, 1.5, {
        autoAlpha: 1,
        ease: Power3.easeInOut,
        y: "-0.5rem",
        delay: 0.2 * i,
        scrollTrigger: {
          trigger: projectWrapperRef,
          start: "top 50%",
        },
      });
    });

    // profile image
    gsap.to(profileImageRef, 1, {
      autoAlpha: 1,
      ease: Power3.easeInOut,
      x: window.innerWidth >= 500 ? "30" : "0",
      y: window.innerWidth <= 1024 ? "-30" : "0",
      delay: 0.2,
    });

    gsap.to(contactFormRef, 1, {
      autoAlpha: 1,
      ease: Power3.easeInOut,
      y: -25,
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: contactFormRef,
        // toggleActions: "restart none reverse reset",
        start: "top 80%",
      },
    });
  }, []);

  const addSkillRefs = (el) => {
    if (el && !skillsRef.includes(el)) {
      skillsRef.push(el);
    }
  };
  const addProjectRefs = (el) => {
    if (el && !projectsRef.includes(el)) {
      projectsRef.push(el);
    }
  };

  return (
    <React.Fragment>
      {/* Home Section */}
      <div
        className="main-wrapper"
        ref={(mainRef) => (mainWrapperRef = mainRef)}
      >
        <AsideContainer />
        <div className="home-main-wrapper">
          {/* Home Page */}
          <ViewComponent containerName={"home"}>
            <div className="home-banner">
              <div
                className="home-overlay-text"
                ref={(el) => (homeBannerText = el)}
              >
                <article className="home-overlay-article">
                  <header className="home-title">Front End Developer</header>
                  <div className="home-banner-name">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    <h1>Kay Kim</h1>
                  </div>
                  <span>
                    <ul className="home-banner-sub-text">
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
              <div
                className="about-image-wrapper"
                ref={(el) => (aboutImageRef = el)}
              >
                <img
                  src={`${kay}`}
                  alt="kayKim"
                  ref={(img) => (profileImageRef = img)}
                />
              </div>
            </div>
          </ViewComponent>
          <ViewComponent containerName={"skill"}>
            <div className="skill-wrapper" ref={(el) => (skillWrapperRef = el)}>
              <div className="expertise-box">Expertise</div>
              <div className="skill-list-box">
                <div className="skill-list-left">
                  <ul>
                    {skills &&
                      skills[0].map((skill, i) => {
                        return (
                          <li
                            key={i}
                            className={`skill ${skill.name}`}
                            ref={(el) => (el = addSkillRefs(el))}
                          >
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
                          <li
                            key={i}
                            className={`skill_${skill.name}`}
                            ref={(el) => (el = addSkillRefs(el))}
                          >
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
            <div
              className="project-wrapper"
              ref={(el) => (projectWrapperRef = el)}
            >
              {Projects &&
                Projects.map((project, i) => {
                  return (
                    <Card
                      url={project.url}
                      projectName={project.name}
                      projectText={project.text}
                      key={i}
                      addProjectRefs={addProjectRefs}
                    />
                  );
                })}
            </div>
          </ViewComponent>
          {/* Contact Page */}
          <ViewComponent containerName={"contact"}>
            <div className="contact-wrapper">
              <div
                className="contact-form-wrapper"
                ref={(el) => (contactFormRef = el)}
              >
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
                {/* <div className="contact-form-right">
                  <InfoCard />
                  <InfoCard />
                </div> */}
              </div>
            </div>
          </ViewComponent>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContainer;
