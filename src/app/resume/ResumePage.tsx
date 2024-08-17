"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import HoverText from "../components/hoverAnimation";

export default function ResumePage() {
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
              <HoverText text="Resume" />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
