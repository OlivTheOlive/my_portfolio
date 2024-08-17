import React from "react";

interface HoverTextProps {
  text: string;
}

const HoverText: React.FC<HoverTextProps> = ({ text }) => {
  return (
    <span>
      {text.split("").map((char, id) => (
        <span className="hoverText" key={id}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default HoverText;
