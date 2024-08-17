"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Rocket from "@/app/lottieAnimation/rocket.json";
import Tilt from "react-parallax-tilt";
import WaterDropGrid from "@/app/components/dotGrid/page";
import { Button } from "@material-tailwind/react";
import TypewriterComponent from "typewriter-effect";

// Import the custom hook
import useInView from "@/app/components/observer/pages";
import HoverText from "../components/hoverAnimation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  // Use the custom hook for the About Me section
  const [aboutRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setOpen(true);
    }
  }, [isInView]);

  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>
            <HoverText text="Hello There!" />
          </h1>
          <h1>
            I'm{" "}
            <b>
              <HoverText text="Olivie Bergeron" />
            </b>
          </h1>
          <h3>
            <TypewriterComponent
              options={{
                strings: [
                  "Software Developer",
                  "MERN Stack Developer",
                  "Canadian Frenchman",
                  "Beagles Are Loud",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 20,
              }}
            ></TypewriterComponent>
          </h3>
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
      <div className="AboutPage">
        {/* <Tilt> */}
        <WaterDropGrid />
        {/* </Tilt> */}

        <div className="AboutText" ref={aboutRef}>
          <h1 className="AboutTextHeading">
            <Button
              onClick={() => setOpen((prev) => !prev)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              ripple={false}
            >
              <HoverText text="Who Am I??" />
            </Button>
          </h1>

          <div className={`collapsible-content ${open ? "open" : ""}`}>
            <p>
              I love the process of changing a raw idea into a website or a
              product that impacts lives. I want to do work that challenges me
              as a developer & work that I can be proud of.
              <br />
              <br />I have a solid foundation in <b>Java and JavaScript</b> and
              know a bit of <b>Python</b> and am working on a few projects in
              the <b>MERN</b> stack.
              <br />I am currently learning <b>Next.js</b> and <b>Typescript</b>
              .
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
