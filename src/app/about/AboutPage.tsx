"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import TypewriterComponent from "typewriter-effect";
import SkillChip from "../components/chipComponent";

export default function AboutPage() {
  const pro = [
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "Sequelize",
    "MySQL",
    "React-Native",
    "Expo",
    "Electron",
    "Material-UI",
    "Jira",
    "Ubuntu",
    "VMWare",
  ];
  const fun = [
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "Sequelize",
    "MySQL",
    "React-Native",
    "Expo",
    "Next.js",
    "Typescript",
    "MongoDB",
    "MsSQL",
    "Material-Tailwind",
    "C#",
    "GadotScripts",
    "Python",
    "Ubuntu",
    "Arch Linux",
  ];
  const school = [
    "Next.js",
    "Typescript",
    "MongoDB",
    "OracleDB",
    "Neo4j",
    "MsSQL",
    "PostgreSQL",
    "Java",
    "Java JPA",
    "Java JSP",
    "Java Servlet",
    "Java JSF",
    "Java/Jakarta EE Security",
    "COBOL",
    "Material-Tailwind",
    "PHP",
    "JavaScript",
    "Python",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0 p-4">
            <Typography
              variant="h4"
              className="text-4xl font-bold mb-4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Get to know me!
            </Typography>
            <div>
              <p className="text-lg leading-7">
                Hello! I&apos;m{" "}
                <b className="text-[#9067c6]">Olivié Bergeron</b> from Ottawa.
                I&apos;m a passionate{" "}
                <b className="text-[#9067c6]">MERN stack web developer</b> and
                an honors graduate in{" "}
                <b className="text-[#9067c6]">Computer Programming</b> from
                Algonquin College.
                <br />
                <br />I had the opportunity to intern as a{" "}
                <b className="text-[#9067c6]">full-stack developer</b> at Nortac
                Defence, a company specializing in situational awareness
                solutions. I enjoy creating unique projects with captivating
                designs—be sure to check out some of my school and personal work
                in the projects section!
                <br />
                <br />
                I&apos;m always <b className="text-[#9067c6]">open</b> to new
                collaborations and opportunities where I can both contribute and
                learn. Feel free to connect with me; you can find my links in
                the footer.
                <br />
                When I&apos;m not coding, you&apos;ll find me making music or
                playing video games.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 p-4 ">
            <Typography
              variant="h4"
              className="text-4xl font-bold mb-4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "Skills",
                    "Language",
                    "Tools",
                    "Applications",
                    "OS",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 20,
                }}
              />
            </Typography>
            <div className="skills-section">
              <div className="skills-category mb-4">
                <Typography
                  variant="h6"
                  className="text-2xl font-semibold mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Professional Use
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {pro.map((skill, index) => (
                    <div key={index}>
                      <SkillChip label={skill} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <Typography
                  variant="h6"
                  className="text-2xl font-semibold mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Personal Use
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {fun.map((skill, index) => (
                    <div key={index}>
                      <SkillChip label={skill} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <Typography
                  variant="h6"
                  className="text-2xl font-semibold mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  School Use
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {school.map((skill, index) => (
                    <div key={index}>
                      <SkillChip label={skill} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
