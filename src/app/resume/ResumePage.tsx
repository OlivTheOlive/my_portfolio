"use client";
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0 p-4">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <div className="mt-4 bg-gray-800 p-4">
              {/* Wrap your Viewer component inside the Worker component */}
              <Worker
                workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
              >
                <Viewer
                  fileUrl="/Olivie_Bergeron_resume.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
            {/* Download Button */}
            <a
              href="/Olivie_Bergeron_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Olivie_Bergeron_resume.pdf"
            >
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
