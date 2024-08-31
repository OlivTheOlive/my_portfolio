"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Rocket from "@/app/lottieAnimation/rocket.json";
import Tilt from "react-parallax-tilt";
import WaterDropGrid from "@/app/components/dotGrid/page";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import TypewriterComponent from "typewriter-effect";
import useInView from "@/app/components/observer/pages";
import HoverText from "../components/hoverAnimation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(1);

  const [aboutRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setOpen(1);
    }
  }, [isInView]);

  const handleAccordionOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen px-4 md:px-20 gap-4">
        <div className="flex flex-col justify-center items-center md:items-end p-4 md:p-0 space-y-6">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">
              <HoverText text="Hello There!" />
            </h1>
            <h1 className="text-4xl font-bold">
              I'm{" "}
              <b>
                <HoverText text="Olivie Bergeron" />
              </b>
            </h1>
            <h3 className="text-lg font-semibold mt-4">
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
              />
            </h3>
          </div>
        </div>
        {isClient && (
          <div className="flex justify-center p-2 md:p-0 md:justify-start">
            <Tilt perspective={500} scale={1.2}>
              <Lottie
                className="w-64 h-64 md:w-80 md:h-80 animate-[rotateLoop_5s_infinite]"
                animationData={Rocket}
                loop={true}
              />
            </Tilt>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-64 px-8 md:px-20 gap-4">
        <div className="flex justify-center p-4">
          <WaterDropGrid />
        </div>
        <div
          className="w-full max-w-2xl mx-auto text-center md:text-left"
          ref={aboutRef}
        >
          <Accordion
            open={open === 1}
            className="mt-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleAccordionOpen(1)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <HoverText text="Who Am I??" />
            </AccordionHeader>
            <AccordionBody>
              <div className="max-h-[500px] overflow-auto space-y-2">
                <p className="text-base font-medium leading-7 tracking-wide text-justify text-white">
                  I love the process of changing a raw idea into a website or a
                  product that impacts lives. I want to do work that challenges
                  me as a developer & work that I can be proud of.
                  <br />
                  <br />I have a solid foundation in <b>
                    Java and JavaScript
                  </b>{" "}
                  and know a bit of <b>Python</b> and am working on a few
                  projects in the <b>MERN</b> stack.
                  <br />I am currently learning <b>Next.js</b> and{" "}
                  <b>Typescript</b>.
                  <br />
                  <br />
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
