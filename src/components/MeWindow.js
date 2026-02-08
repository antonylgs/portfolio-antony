import Window from "./Window";
import Image from "next/image";
import { forwardRef } from "react";

const MeWindow = forwardRef(({ childRef, ...props }, ref) => {
  return (
    <Window childRef={childRef} ref={ref} overflow={false} {...props}>
      {/* Me */}
      <div className="flex flex-col sm:flex-row gap-6 ml-8 mt-8 mr-8 mb-6">
        <div className="rounded-xl sm:rounded-full min-w-[80px] min-h-[120px] sm:min-h-[80px] profile-picture" />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg rounded-md">Antony Langlois</h1>
          <a
            href="mailto:antonylanglois.pro@gmail.com"
            className="italic text-sm flex items-center"
          >
            <Image
              src="/airdrop.svg"
              width={20}
              height={20}
              alt="Airdrop icon"
            />
            antonylanglois.pro@gmail.com
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-6 sm:flex-row mr-8 ml-8 sm:gap-2">
        {/* Left */}
        <div className="flex flex-col items-start h-full flex-[1] gap-6">
          {/* Studies */}
          <div>
            <div className="flex gap-2 items-center bg-[rgba(255,255,255,0.1)] pl-2 pr-2 mb-2 rounded-md w-fit">
              <Image
                src="/cloud-to-upload.svg"
                width={20}
                height={20}
                alt="Cloud upload icon"
              />
              <h2 className="text-lg font-light">Studies & Experiences</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://www.eemi.com/" target="_blank">
                  <strong>EEMI</strong>
                </a>{" "}
                <span className="text-sm italic text-stone-500">
                  (European School of Internet Professions)
                </span>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  Digital Project Management Bachelor
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  2023 Hackadon&apos;s winner team
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <span>
                    A11y 2024{" "}
                    <span className=" text-sm italic text-stone-500">
                      (Web Accessibility School Competition)
                    </span>
                  </span>
                </div>
              </li>
              <li>
                <a href="https://upslide.net/" target="_blank">
                  <strong>UpSlide</strong>
                </a>{" "}
                <span className="text-sm italic text-stone-500">
                  (Microsoft 365 Add-ins)
                </span>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <span>
                    Developer & Marketing Engineer{" "}
                    <span className=" text-sm italic text-stone-500">
                      [Sep.2022 - Sep.2023]
                    </span>
                  </span>
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={"20"}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <span>
                    TypeScript & C# Developer{" "}
                    <span className=" text-sm italic text-stone-500">
                      [Sep.2023 - Sep.2024]
                    </span>
                  </span>
                </div>
              </li>
              <li>
                <strong>Side Hustles</strong>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  Coding Teacher for beginners
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  Web Solutions Developer
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Right */}
        <div
          className={`flex flex-col ${
            props.expanded
              ? "lg:flex-row lg:flex-[0.7] lg:gap-16"
              : "lg:flex-col"
          } items-start h-full flex-[0.4] gap-6`}
        >
          {/* Tech */}
          <div>
            <div className="flex gap-2 items-center bg-[rgba(255,255,255,0.1)] pl-2 pr-2 mb-2 rounded-md w-fit">
              <Image src="/world.svg" width={20} height={20} alt="World icon" />
              <h2 className="text-lg font-light">Main Tech</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  NextJs, ReactJs
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  C#, Dot.Net
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  PHP, Wordpress
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  Python
                </div>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div>
            <div className="flex gap-2 items-center bg-[rgba(255,255,255,0.1)] pl-2 pr-2 mb-2 rounded-md w-fit">
              <Image src="/world.svg" width={20} height={20} alt="World icon" />
              <h2 className="text-lg font-light">Links</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <a
                    href="https://www.linkedin.com/in/antonylanglois/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <a href="https://github.com/antonylgs" target="_blank">
                    GitHub
                  </a>
                </div>
                <div className="flex">
                  <Image
                    src="/arrow.svg"
                    width={20}
                    height={20}
                    className="h-fit"
                    alt="Arrow from left to right icon"
                  />
                  <a href="https://codepen.io/antonylgs" target="_blank">
                    CodePen
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Window>
  );
});

MeWindow.displayName = "MeWindow";

export default MeWindow;
