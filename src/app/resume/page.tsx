import React from "react";

import { Metadata } from "next";
import ResumePage from "./ResumePage";

export const metadata: Metadata = {
  title: "Olivie Bergeron",
  description: "Resume",
};

export default function page() {
  return (
    <>
      <ResumePage />
    </>
  );
}
