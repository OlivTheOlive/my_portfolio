"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Rocket from "@/app/lottieAnimation/rocket.json";
import Tilt from "react-parallax-tilt";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Olivie Bergeron</b>
          </h1>
          {/* <Typed /> */}
        </div>
        {isClient && (
          <Tilt perspective={500} scale={1.2}>
            <Lottie
              className="illustration"
              animationData={Rocket}
              loop={true}
            />
          </Tilt>
        )}
      </div>
      <div className="AboutPage ">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I have a solid foundation in <b>Java and JavaScript</b> and
            know a bit of <b>Python</b> and am working on a few projects in the{" "}
            <b>MERN</b> stack.
            <br />I am currently learning <b>Next.js</b> and <b>Typescript</b>
            .
            <br />
            <br />
            {/* <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} /> */}
          </p>
        </div>
        {/* <Tilt>
          <img className="Avatar" src={Avatar} alt="Avatar" />
        </Tilt> */}
      </div>
    </div>
  );
};

export default HomePage;
