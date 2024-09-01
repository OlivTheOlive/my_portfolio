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
  const [open, setOpen] = useState(false);

  const [aboutRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setOpen(true);
    }
  }, [isInView]);

  const handleAccordionOpen = (value: boolean) => {
    setOpen(open === value ? false : value);
  };

  return (
    <div className="min-h-screen px-4 md:px-20 py-8 space-y-40">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center space-y-8"
      >
        <div className="text-center space-y-4">
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
        <div className="flex justify-center">
          <Tilt perspective={500} scale={1.2}>
            <Lottie
              className="w-64 h-64 md:w-80 md:h-80 animate-[rotateLoop_5s_infinite]"
              animationData={Rocket}
              loop={true}
            />
          </Tilt>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center space-y-8"
      >
        <div ref={aboutRef} className="w-full max-w-lg">
          <Accordion
            open={open}
            className="w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleAccordionOpen(true)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <HoverText text="Who Am I???" />
            </AccordionHeader>
            <AccordionBody>
              <div className="max-h-[500px] overflow-auto space-y-4 text-base font-medium leading-7 tracking-wide text-justify text-white">
                <p>
                  I'm passionate about transforming raw ideas into meaningful
                  products that make a difference in people's lives. I seek work
                  that pushes my boundaries as a developer and allows me to
                  create something I can truly be proud of.
                </p>
                <p>
                  My skills include a strong foundation in <b>Java</b> and{" "}
                  <b>JavaScript</b>, with working knowledge of <b>Python</b>.
                  I'm actively involved in projects using the <b>MERN</b> stack
                  and currently expanding my expertise in <b>Next.js</b>,{" "}
                  <b>TypeScript</b>, and <b>C#</b>.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="flex justify-center">
          <WaterDropGrid />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
