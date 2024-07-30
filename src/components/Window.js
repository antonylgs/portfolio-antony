import { useState, useEffect, useRef, forwardRef } from "react";

const Window = forwardRef(({ children, childRef, ...props }, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - props.position.x,
      y: e.clientY - props.position.y,
    });
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      props.setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (ref) {
      ref.current = windowRef.current;
    }
  }, [ref]);

  return (
    <div
      ref={windowRef}
      style={{
        position: "absolute",
        left: `${props.position.x}px`,
        top: `${props.position.y}px`,
        visibility: props.isPositioned ? "visible" : "hidden",
      }}
      className={` ${
        props.expanded
          ? "lg:w-[80vw] sm:w-[(%vw] sm:h-[80vh] sm:mt-8"
          : "lg:w-[800px] lg:h-[520px]"
      } sm:w-[600px] sm:h-[550px] w-full h-full bg-[rgb(39,39,39)] sm:rounded-xl sm:border-2 sm:border-[rgba(128,128,128,0.5)] sm:overflow-hidden overflow-x-hidden pb-8 sm:pb-0`}
    >
      {/* Handle bar */}
      <div
        className="bg-[rgb(70,70,70)] sm:w-full sm:h-[32px] hidden sm:items-center sm:flex"
        ref={childRef}
        onMouseDown={onMouseDown}
      >
        <div
          className="bg-[rgb(251,88,88)] rounded-full w-[12px] h-[12px] ml-4 hover:bg-[rgb(209,70,70)]"
          onClick={() => props.setShowWindow(false)}
        ></div>
        <div className="bg-[rgb(255,219,113)] rounded-full w-[12px] h-[12px] ml-2 hover:bg-[213,183,95)]"></div>
        <div
          className="bg-[rgb(78,206,78)] rounded-full w-[12px] h-[12px] ml-2 hover:bg-[52,150,52)]"
          onClick={() => props.setExpanded(!props.expanded)}
        ></div>
      </div>
      <div
        className={`${
          props.overflow ? "overflow-y-scroll" : "overflow-y-hidden"
        } sm:h-[95%]`}
      >
        {children}
      </div>
    </div>
  );
});

export default Window;
