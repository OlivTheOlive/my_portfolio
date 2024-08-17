import React from "react";

import { Metadata } from "next";
import ProjectPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Olivie Bergeron",
  description: "Projects",
};

export default function page() {
  return (
    <>
      <ProjectPage />
    </>
  );
}
