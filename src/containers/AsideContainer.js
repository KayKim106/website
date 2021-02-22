import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

const AsideContainer = () => {
  let asideRef = useRef(null);
  let sciRefs = useRef([]);
  sciRefs.current = [];

  useEffect(() => {
    gsap.to(asideRef, 1, {
      autoAlpha: 1,
      ease: Power3.easeInOut,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  useEffect(() => {
    sciRefs &&
      sciRefs.current.forEach((sci, i) => {
        gsap.to(sci, 1, {
          autoAlpha: 1,
          duration: 0.6,
          delay: 0.2 * i,
          x: 5,
          ease: Power3.easeInOut,
        });
      });
  }, [asideRef]);
  const addSciRef = (ref) => {
    if (ref && !sciRefs.current.includes(ref)) {
      sciRefs.current.push(ref);
    }
  };
  const sciList = [
    { name: "instagram", link:'https://www.instagram.com/kayok_kim/' },
    { name: "github", link:'https://github.com/KayKim106' },
    { name: "linkedin-in", link:'https://www.linkedin.com/in/kay-kim106/' },
  ];

  return (
    <div className="sci-aside-wrapper" ref={(el) => (asideRef = el)}>
      <div className="sci-container">
        <ul className="sci-icons">
          {sciList &&
            sciList.map((icon, key) => {
              return (
                <li className={`sci-icon`} key={key} ref={addSciRef} onClick={(e)=>window.open(icon.link,'_blank')}>
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
