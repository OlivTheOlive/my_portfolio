// ProjectCard.tsx
import React from "react";
import SkillChip from "../chipComponent";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  urls: { title: string; url: string }[];
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const formatDescription = (description: string) => {
    const parts = description.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <b key={index} className="text-[#9067c6]">
          {part.slice(2, -2)}
        </b>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative backdrop-blur-lg backdrop-brightness-110   text-white p-6 shadow-2xl mb-6 rounded-tr-lg rounded-bl-lg ">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-300 mb-4">{project.date}</p>
      <p className="mb-4 text-justify">
        {formatDescription(project.description)}
      </p>{" "}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Tools Used:</h3>
        <ul className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <div key={index}>
              <SkillChip label={tool} />
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Repos</h3>
        <div className="flex gap-4">
          {project.urls.map((link, index) => (
            <Tooltip
              key={index}
              placement="bottom"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: -25 },
              }}
              content={
                <div className="w-auto">
                  <Typography
                    color="white"
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {link.title}
                  </Typography>
                </div>
              }
            >
              <a href={link.url}>
                <IconButton
                  color="black"
                  size="lg"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <i className="fa-brands fa-github" />
                </IconButton>
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
