import React from "react";

interface ProjectComponentProps {
  time: string;
  img: string;
  name: string;
  description: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  time,
  img,
  name,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full mx-auto">
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 mb-4">{time}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
