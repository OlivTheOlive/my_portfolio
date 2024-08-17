"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import TypewriterComponent from "typewriter-effect";
import SkillChip from "../components/chipComponent";

export default function ResumePage() {
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
              Resume
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
