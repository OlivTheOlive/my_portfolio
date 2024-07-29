"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Rocket from "@/app/lottieAnimation/rocket.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Hi There!</h1>
        <h1 className="text-3xl">
          I'M <b>Olivie Bergeron</b>
        </h1>
        {/* <Typed /> */}
      </div>

      {isClient && (
        <div className="w-80 h-80 mb-12">
          <Lottie
            className="w-full h-full"
            animationData={Rocket}
            loop={true}
          />
        </div>
      )}

      <div className="AboutPage bg-black p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="AboutText">
          <h1 className="AboutTextHeading text-2xl font-semibold mb-4">
            Brief <b>introduction</b>
          </h1>
          <p className="text-gray-700">
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I have a solid foundation in <b>Java and JavaScript</b> and
            know a bit of <b>Python</b> and am working on a few projects in the{" "}
            <b>MERN</b> stack.
            <br />I am currently learning <b>Next.js</b> and <b>Typescript</b>.
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
