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
      description: "test",
      date: "July-Aug 2024",
      urls: [
        {
          title: "BackEnd",
          url: "https://github.com/OlivTheOlive/RoadRunnerV2",
        },
      ],
    },
    {
      id: 2,
      title: "RoadRunner",
      description: "test",
      date: "June-Aug 2024",
      urls: [
        {
          title: "BackEnd",
          url: "https://github.com/OlivTheOlive/RoadRunnerV2",
        },
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
