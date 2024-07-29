"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import CustomCursor from "@/components/customCursor";
import Footer from "@/components/footer";
import HomePage from "@/home/page";
import { GridLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <GridLoader
            color={"#9067C6"}
            loading={true}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <HomePage />
          <Footer />
        </div>
      )}
    </div>
  );
}
