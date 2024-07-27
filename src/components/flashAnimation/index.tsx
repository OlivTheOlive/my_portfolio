import React, { useEffect, useState } from "react";
import "./index.css";

const FlashEffect: React.FC = () => {
  const [flashes, setFlashes] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 0) {
      // Check if the left mouse button is clicked
      const newFlash = { id: Date.now(), x: e.clientX, y: e.clientY };
      setFlashes((prevFlashes) => [...prevFlashes, newFlash]);

      // Remove the flash after a short duration
      setTimeout(() => {
        setFlashes((prevFlashes) =>
          prevFlashes.filter((flash) => flash.id !== newFlash.id)
        );
      }, 300); // Flash duration
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="flash-container">
      {flashes.map((flash) => (
        <div
          key={flash.id}
          className="flash-effect"
          style={{
            left: flash.x,
            top: flash.y,
            position: "absolute",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default FlashEffect;
