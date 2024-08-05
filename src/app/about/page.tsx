import React from "react";
import AboutPage from "./AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olivie Bergeron",
  description: "About",
};

export default function page() {
  return (
    <>
      <AboutPage />
    </>
  );
}
