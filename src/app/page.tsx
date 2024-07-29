"use client";
import React from "react";
import Navbar from "@/components/navBar";
import CustomCursor from "@/components/customCursor";
import Footer from "@/components/footer";
import HomePage from "@/home/page";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
