import React from "react";
import HomePage from "@/app/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olivie Bergeron",
  description: "Home",
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
