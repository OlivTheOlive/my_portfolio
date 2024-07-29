"use client";
import React from "react";
import Navbar from "@/components/navBar";
import CustomCursor from "@/components/customCursor";
import Footer from "@/components/footer";
import HomePage from "@/home/page";
import WaterDropGrid from "@/components/dotGrid/page";

export default function Home() {
  return (
    <div>
      {/* <CustomCursor /> */}

      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
