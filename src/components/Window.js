export default function Window(props) {
  return (
    <div
      className={` ${
        props.expanded
          ? "lg:w-[80vw] sm:w-[(%vw] sm:h-[80vh] sm:mt-8"
          : "lg:w-[800px] lg:h-[520px]"
      } sm:w-[600px] sm:h-[550px] w-full h-full bg-[rgb(39,39,39)] sm:rounded-xl sm:border-2 sm:border-[rgba(128,128,128,0.5)] sm:overflow-hidden overflow-x-hidden pb-8 sm:pb-0`}
    >
      {/* Handle bar */}
      <div className="bg-[rgb(70,70,70)] sm:w-full sm:h-[32px] hidden sm:items-center sm:flex">
        <div
          className="bg-[rgb(251,88,88)] rounded-full w-[12px] h-[12px] ml-4 hover:bg-[rgb(209,70,70)]"
          onClick={() => props.setShowWindow(false)}
        ></div>
        <div className="bg-[rgb(255,219,113)] rounded-full w-[12px] h-[12px] ml-2 hover:bg-[rgb(213,183,95)]"></div>
        <div
          className="bg-[rgb(78,206,78)] rounded-full w-[12px] h-[12px] ml-2 hover:bg-[rgb(52,150,52)]"
          onClick={() => props.setExpanded(!props.expanded)}
        ></div>
      </div>
      <div className="overflow-y-scroll sm:h-[95%]">{props.children}</div>
    </div>
  );
}
