import React from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons, techStackImgs } from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className={"flex-center section-padding"}>
      <div className={"w-full h-full md:px-10 px-5"}>
        <TitleHeader
          title={"My Preferred Tech Stack"}
          sub={"The Skills I Bring to the Table"}
        />

        <div className={"tech-grid"}>
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className={
                "card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              }
            >
              <div className={"tech-card-animated-bg"} />
              <div className={"tech-card-content"}>
                <div className={"tech-icon-wrapper"}>
                  {icon.modelPath ? (
                    <TechIcon model={icon} />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full p-6">
                      <img
                        src={icon.imgPath}
                        alt={icon.name}
                        className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className={"px-4 w-full text-center pb-6"}>
                  <p className="text-sm md:text-base whitespace-nowrap">{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/*for images in tech stack*/}
          {/*{techStackImgs.map((icon)=>(*/}
          {/*    <div className={"card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"} key={icon.name}>*/}
          {/*        <div className={"tech-card-animated-bg"}/>*/}
          {/*        <div className={"tech-card-content"}>*/}
          {/*            <div className={"tech-icon-wrapper"}>*/}
          {/*                <img src={icon.imgPath} alt={icon.name}/>*/}
          {/*            </div>*/}
          {/*            <div className={"padding-x w-full"}>*/}
          {/*                <p>{icon.name}</p>  */}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*))}*/}
        </div>
      </div>
    </div>
  );
};
export default TechStack;
