"use client";
import MeWindow from "@/components/MeWindow";
import ProjectsWindow from "@/components/ProjectsWindow";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showWindow, setShowWindow] = useState(true);
  const [activeWindow, setActiveWindow] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);

  const meWindowRef = useRef(null);
  const projectsWindowRef = useRef(null);
  const meWindowHandlerRef = useRef(null);
  const projectsWindowHandlerRef = useRef(null);

  const getInitialPosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const currentRef = activeWindow === 1 ? meWindowRef : projectsWindowRef;

    const elementWidth = currentRef.current?.offsetWidth || 600;
    const elementHeight = currentRef.current?.offsetHeight || 550;

    return {
      x: (windowWidth - elementWidth) / 2,
      y: (windowHeight - elementHeight - 50) / 2,
    };
  };

  const centerWindow = () => {
    setPosition(getInitialPosition());
  };

  useEffect(() => {
    centerWindow();
    setIsPositioned(true);
  }, [centerWindow]);

  useEffect(() => {
    centerWindow();
  }, [expanded, centerWindow]);

  return (
    <main
      className={`flex justify-center ${
        expanded ? "items-start" : "items-center"
      } w-full h-full`}
    >
      {showWindow && activeWindow == 1 && (
        <MeWindow
          setShowWindow={setShowWindow}
          setExpanded={setExpanded}
          setPosition={setPosition}
          expanded={expanded}
          position={position}
          isPositioned={isPositioned}
          ref={meWindowRef}
          childRef={meWindowHandlerRef}
        />
      )}
      {showWindow && activeWindow == 2 && (
        <ProjectsWindow
          setShowWindow={setShowWindow}
          setExpanded={setExpanded}
          setPosition={setPosition}
          expanded={expanded}
          position={position}
          isPositioned={isPositioned}
          ref={projectsWindowRef}
          childRef={projectsWindowHandlerRef}
        />
      )}
      <div className="absolute flex flex-col sm:flex-row sm:bottom-8 bottom-4 right-4 sm:right-auto gap-6 sm:gap-12 bg-[rgba(39,39,39,0.9)] border-[rgba(128,128,128,0.5)] border-2 sm:px-8 px-2 sm:py-2 py-4 rounded-xl">
        <Image
          height={60}
          width={60}
          src="/contact.svg"
          alt="Contact icon"
          className="cursor-pointer"
          onMouseEnter={() => setHoveredIcon(1)}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => {
            setActiveWindow(1);
            setShowWindow(true);
          }}
        />
        <h2
          className={`${
            hoveredIcon == 1 && "sm:opacity-100"
          } opacity-0 font-bold absolute left-[20%] top-[-30px]`}
        >
          Me
        </h2>
        <Image
          height={60}
          width={60}
          className="cursor-pointer"
          src="/finder.svg"
          alt="Finder icon"
          onMouseEnter={() => setHoveredIcon(2)}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => {
            setActiveWindow(2);
            setShowWindow(true);
          }}
        />
        <h2
          className={` ${
            hoveredIcon == 2 && "sm:opacity-100"
          } opacity-0 font-bold absolute right-[7%] top-[-30px] text-center`}
        >
          My projects
        </h2>
      </div>
    </main>
  );
}
