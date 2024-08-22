import {
  CodeBracketSquareIcon,
  DocumentTextIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const NavbarComponent: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isLargeScreen, setIsLargeScreen] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 960);
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger on mount to check initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link href="/" className="flex items-center no-underline">
          <HomeModernIcon className="h-5 w-5" />
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link href="/about" className="flex items-center no-underline">
          <UserCircleIcon className="h-5 w-5" />
          About
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link href="/projects" className="flex items-center no-underline">
          <CodeBracketSquareIcon className="h-5 w-5" />
          Projects
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none shadow-none bg-inherit"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div
        className="container mx-auto grid grid-cols-3 items-center"
        style={{
          gridTemplateColumns: "20% 60% 20%", // Defines the 20-60-20 grid layout
        }}
      >
        <div className="flex justify-start">
          <Link
            href="/"
            className="flex items-center no-underline text-lg bg-inherit rounded-full"
          >
            OB
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="hidden lg:block">{navList}</div>
        </div>

        <div className="flex justify-end">
          {isLargeScreen && (
            <Link
              href="/resume"
              className="flex items-center no-underline text-lg bg-inherit rounded-full"
            >
              <DocumentTextIcon className="h-5 w-5 mr-1" />
              Resume
            </Link>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto flex flex-col items-center justify-center">
          {navList}

          <div className="flex flex-col items-center gap-x-1 mt-4">
            <Link href="/resume" className="flex items-center">
              <DocumentTextIcon className="h-5 w-5 mr-1" />
              Resume
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
