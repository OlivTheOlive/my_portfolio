"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import ProjectComponent from "../components/projectComponent";
import { CarouselComponent } from "../components/carouselComponent";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      {/* Page Heading */}
      <Typography
        variant="h4"
        className="text-4xl font-bold mb-12 text-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Projects
      </Typography>
      <CarouselComponent />
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <ProjectComponent
          time="June 2024"
          img="https://example.com/project-image.jpg"
          name="My Awesome Project"
          description="This project involves building a full-stack application with React and Node.js."
        />
        <ProjectComponent
          time="April 2024"
          img="https://example.com/another-project.jpg"
          name="Another Cool Project"
          description="This project showcases a beautiful portfolio website built with Next.js."
        />
        <ProjectComponent
          time="April 2024"
          img="https://example.com/another-project.jpg"
          name="Another Cool Project"
          description="This project showcases a beautiful portfolio website built with Next.js."
        />
        <ProjectComponent
          time="April 2024"
          img="https://example.com/another-project.jpg"
          name="Another Cool Project"
          description="This project showcases a beautiful portfolio website built with Next.js."
        />
        <ProjectComponent
          time="April 2024"
          img="https://example.com/another-project.jpg"
          name="Another Cool Project"
          description="This project showcases a beautiful portfolio website built with Next.js."
        />
        <ProjectComponent
          time="April 2024"
          img="https://example.com/another-project.jpg"
          name="Another Cool Project"
          description="This project showcases a beautiful portfolio website built with Next.js."
        />
      </div>
    </div>
  );
}
