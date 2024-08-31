import React, { useEffect, useState } from "react";
import anime from "animejs";

const WaterDropGrid: React.FC = () => {
  return (
    <div className="relative grid place-content-center px-8 py-12">
      <DotGrid />
    </div>
  );
};

interface DotGridProps {}

const DotGrid: React.FC<DotGridProps> = () => {
  const [gridWidth, setGridWidth] = useState(5); // Default grid width for mobile
  const [gridHeight, setGridHeight] = useState(10); // Default grid height

  // Function to dynamically calculate the number of columns based on screen size
  const calculateGridSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setGridWidth(10); // For small screens
      setGridHeight(10);
    } else if (screenWidth < 768) {
      setGridWidth(12); // For medium screens
      setGridHeight(10);
    } else if (screenWidth < 1024) {
      setGridWidth(15); // For large screens
      setGridHeight(10);
    } else {
      setGridWidth(20); // For extra-large screens
      setGridHeight(15);
    }
  };

  useEffect(() => {
    calculateGridSize(); // Initial calculation on mount
    window.addEventListener("resize", calculateGridSize); // Recalculate on resize
    return () => window.removeEventListener("resize", calculateGridSize); // Cleanup on unmount
  }, []);

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const index = target.dataset.index;

    if (index === undefined) return;

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridWidth, gridHeight], // Use dynamic grid width
        from: parseInt(index, 10),
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }} // Dynamic column count
      className="grid w-fit gap-1"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
