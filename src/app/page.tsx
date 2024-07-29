"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/app/components/navBar";
import Footer from "@/app/components/footer";
import HomePage from "@/app/pages/home/page";
import { GridLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Olivie Bergeron</title>
        <meta name="description" content="My Portfolio" />
      </Head>

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
