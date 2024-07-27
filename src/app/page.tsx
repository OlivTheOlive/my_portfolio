"use client";
import React from "react";
import Navbar from "@/components/navBar";
import CustomCursor from "@/components/customCursor";
import FlashEffect from "@/components/flashAnimation";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      {/* <FlashEffect /> */}
    </div>
  );
}
