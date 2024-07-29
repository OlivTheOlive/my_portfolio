"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import HomePage from "@/app/home/page";
import { GridLoader } from "react-spinners";
import NavbarComponent from "./components/navBar";
import FooterComponent from "./components/footer";

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
          <NavbarComponent />
          <HomePage />
          <FooterComponent />
        </div>
      )}
    </div>
  );
}
