// ResumePage.tsx
"use client";
import React from "react";
import PDFViewer from "./pdfViewer"; // Import the PDFViewer component

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="max-w-4xl w-full text-center">
        <PDFViewer />
      </div>
    </div>
  );
}
