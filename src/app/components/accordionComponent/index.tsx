import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

// Define the project type interface
interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  urls: Array<{ title: string; url: string }>;
  tools: Array<string>;
}

interface AccordionComponentProps {
  projects: Array<Project>;
}

function Icon({ id, open }: { id: number; open: number | null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionComponent({ projects }: AccordionComponentProps) {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleOpen = (value: number) => setOpen(open === value ? null : value);

  return (
    <>
      {projects.map((project) => (
        <Accordion
          key={project.id}
          open={open === project.id}
          animate={{
            mount: { scale: 1 },
            unmount: { scale: 0.9 },
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            onClick={() => handleOpen(project.id)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="grid grid-cols-[60%_35%_5%] items-center w-full">
              <Typography
                variant="h4"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {project.title}
              </Typography>
              <Typography
                className="text-right"
                variant="h6"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {project.date}
              </Typography>
              <div className="flex justify-end">
                <Icon id={project.id} open={open} />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <Typography
              className="mb-4"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {project.description}
            </Typography>
            <div className="flex gap-4">
              {project.urls.map((link, index) => (
                <Tooltip
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
                      key={index}
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
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
