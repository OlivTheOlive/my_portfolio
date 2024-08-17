"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import TypewriterComponent from "typewriter-effect";
import SkillChip from "../components/chipComponent";

export default function ProjectPage() {
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
              Projects
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
