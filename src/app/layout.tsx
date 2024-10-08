"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/navBar";
import FooterComponent from "./components/footer";
import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import Sun from "@/app/lottieAnimation/sun.json";

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const windowWidth = window.innerWidth;

      const scrollPercentage = scrollPositionY / documentHeight;
      const sunPositionX = scrollPercentage * (windowWidth - 150);

      const sunElement = document.getElementById("sun-animation");
      if (sunElement) {
        sunElement.style.transform = `translate(${sunPositionX}px, 0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
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

            {/* <div
              id="sun-animation"
              className="fixed top-10 left-0"
              style={{
                width: "100px",
                height: "100px",
                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <Lottie animationData={Sun} loop={true} />
            </div> */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              {children}
            </div>
            <FooterComponent />
          </div>
        )}
      </body>
    </html>
  );
}
