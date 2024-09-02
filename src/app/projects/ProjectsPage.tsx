"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import ProjectComponent from "../components/projectComponent";
import { CarouselComponent } from "../components/carouselComponent";
import { AccordionComponent } from "../components/accordionComponent";
import ProjectCard from "../components/projectComponent";

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
      description:
        "RoadRunner is a mobile application built for real-time route tracking and management, designed to assist users in navigating efficiently and safely. Developed with React Native and powered by the Expo framework, this app leverages various libraries like react-native-maps and Mapbox Polyline to provide accurate and dynamic route visualization. The application integrates Geolib and expo-location for precise location tracking and geofencing capabilities, enhancing navigation features. The backend, built with Express.js and MongoDB (Mongoose), handles real-time data processing, storage, and synchronization, ensuring a smooth and reliable user experience. Axios is used for seamless API communication between the app and backend services. This application was developed as part of a database course project, focusing on integrating the Google Directions API to offer advanced routing and navigation capabilities.",
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
        "Google Direction API",
      ],
    },
    {
      id: 3,
      title: "CSV Editor",
      description:
        "A full-stack web application designed to provide a robust and user-friendly interface for uploading, editing, and exporting CSV files. Built with a React.js frontend and a Node.js/Express.js backend, the CSV Editor allows users to seamlessly manipulate large datasets. The application integrates MUI for a clean and intuitive user interface and leverages PapaParse for efficient CSV parsing and processing. The backend is built with TypeScript for enhanced type safety and maintainability, and provides RESTful API endpoints for CRUD operations on CSV data. The project also features robust error handling and data validation to ensure data integrity. End-to-end testing is implemented with Jest to guarantee reliability and smooth functionality across different user scenarios. This tool was build during my Language Research class where the goal was to learn a new language and build an application with it.",
      date: "May-Aug 2024",
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

    {
      id: 4,
      title: "Portfolio",
      description:
        "A personal portfolio website designed to showcase my skills, projects, and experience in software development. Built using Next.js and React.js for a seamless and interactive user experience, the website integrates modern UI libraries like Material Tailwind and MUI for an elegant and responsive design. The project emphasizes performance and accessibility, ensuring smooth navigation across devices. Tailwind CSS is leveraged to provide a consistent, modern aesthetic while maintaining a minimalist and clean interface.",
      date: "Aug-Sept 2024",
      urls: [
        {
          title: "FrontEnd",
          url: "https://github.com/OlivTheOlive/my_portfolio",
        },
      ],
      tools: [
        "TypeScript",
        "MUI",
        "Tailwind Css",
        "Material Tailwind",
        "React.js",
        "Next.js",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="lg:w-9/12 mb-8 lg:mb-0 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Projects
        </h1>
        {project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* <div className="w-9/12">
        <AccordionComponent projects={project} />
      </div> */}
    </div>
  );
}
