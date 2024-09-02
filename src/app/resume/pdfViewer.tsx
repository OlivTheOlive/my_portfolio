// PDFViewer.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Typography } from "@material-tailwind/react";

// Set workerSrc for PDF.js to the locally hosted file
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const PDFViewer: React.FC = () => {
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const renderTaskRef = useRef<any>(null);

  useEffect(() => {
    // Load the PDF file when the component mounts
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument("/Olivie_Bergeron_resume.pdf");
      try {
        const loadedPdf = await loadingTask.promise;
        setPdf(loadedPdf);
        setTotalPages(loadedPdf.numPages);
        renderPage(loadedPdf, pageNumber); // Render the first page
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, []);

  const renderPage = async (
    pdfDoc: pdfjsLib.PDFDocumentProxy,
    pageNum: number
  ) => {
    if (!canvasRef.current) return;

    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale });
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context!,
      viewport: viewport,
    };

    const renderTask = page.render(renderContext);
    renderTaskRef.current = renderTask;

    renderTask.promise
      .then(() => {
        renderTaskRef.current = null;
      })
      .catch((error) => {
        if (error.name === "RenderingCancelledException") {
          console.log("Rendering cancelled: ", error.message);
        } else {
          console.error("Error rendering page:", error);
        }
      });
  };

  const handlePreviousPage = () => {
    if (pdf && pageNumber > 1) {
      const newPageNumber = pageNumber - 1;
      setPageNumber(newPageNumber);
      renderPage(pdf, newPageNumber);
    }
  };

  const handleNextPage = () => {
    if (pdf && pageNumber < totalPages) {
      const newPageNumber = pageNumber + 1;
      setPageNumber(newPageNumber);
      renderPage(pdf, newPageNumber);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <Typography
        variant="h4"
        className="text-4xl font-bold mb-12 text-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Resume
      </Typography>
      <div className="max-w-2xl  text-center">
        <div className="p-4 mb-8 rounded bg-gray-900">
          <canvas ref={canvasRef} className="w-full" />
        </div>

        <div className="mt-4 flex justify-center items-center gap-4">
          <button
            onClick={handlePreviousPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Back
          </button>
          <span className="text-white flex-grow text-center">
            Page {pageNumber} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={pageNumber >= totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>

        <a
          href="/Olivie_Bergeron_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Olivie_Bergeron_resume.pdf"
          className="flex items-center justify-center"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg mt-4">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
