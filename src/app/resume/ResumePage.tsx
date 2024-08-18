"use client";
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white ">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        <div className=" p-4 mb-8 rounded">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl="/Olivie_Bergeron_resume.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
        <a
          href="/Olivie_Bergeron_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Olivie_Bergeron_resume.pdf"
          className="flex items-center justify-center"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg ">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
