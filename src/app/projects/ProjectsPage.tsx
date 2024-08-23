"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import ProjectComponent from "../components/projectComponent";
import { CarouselComponent } from "../components/carouselComponent";
import { AccordionComponent } from "../components/accordionComponent";

export default function ProjectPage() {
  const project = [
    {
      id: 1,
      title: "Zoho Customer Portal Prototype",
      description:
        "This project is a robust backend Node.js application designed specifically for a ZOHO environment, developed as part of my Software Development class, where I served as the team lead. My primary responsibility was managing the team's task separation and leading the development of the backend Node.js application, while my team members built a frontend prototype using React.js. Initially, our goal was to develop a web app using Zoho Creator; however, due to platform limitations, we proposed a more flexible solution using the MERN stack. The backend seamlessly integrates with the ZOHO API to manage and synchronize data from ZOHO Projects, including tasks, while automatically updating MongoDB every 12 hours. The app also refreshes the ACCESS_TOKEN when necessary and provides API routes for the frontend to display project data in real time. The client was pleased with our rapid turnaround and proposed solution, but at the time, they were uncertain about their long-term future with ZOHO, which could render the prototype potentially obsolete as they continue to research the best platform for their needs.",
      date: "July-Aug 2024",
      urls: [
        {
          title: "BackEnd",
          url: "https://github.com/OlivTheOlive/clientZohoNodeApi",
        },
      ],
      tools: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Mongoose",
        "Nodemon",
        "ZOHO API Console",
      ],
    },
    {
      id: 2,
      title: "RoadRunner",
      description: "test",
      date: "June-Aug 2024",
      urls: [
        {
          title: "App",
          url: "https://github.com/OlivTheOlive/RoadRunnerV2",
        },
        {
          title: "Backend",
          url: "https://github.com/Say1491/DB-server",
        },
      ],
      tools: [
        "JavaScript",
        "React-Native",
        "Axio",
        "Geolib",
        "react-native-maps",
        "Expo",
        "expo-location",
        "Mapbox Polyline",
        "Express.js",
        "Jest",
        "Mongoose",
        "Nodemon",
      ],
    },
    {
      id: 3,
      title: "CSV editor",
      description: "test",
      date: " May-Aug 2024",
      urls: [
        {
          title: "FrontEnd",
          url: "https://github.com/OlivTheOlive/csvEditorFrontend",
        },
        {
          title: "BackEnd",
          url: "https://github.com/OlivTheOlive/csvEditorBackend",
        },
      ],
      tools: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MUI",
        "PapaParse",
        "React.js",
        "Next.js",
        "Jest",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <Typography
        variant="h4"
        className="text-4xl font-bold mb-12 text-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Projects
      </Typography>

      <div className="w-9/12">
        <AccordionComponent projects={project} />
      </div>
    </div>
  );
}
