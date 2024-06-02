import Image from "next/image";
import Window from "./Window";

export default function ProjectsWindow(props) {
  return (
    <Window
      setShowWindow={props.setShowWindow}
      setExpanded={props.setExpanded}
      expanded={props.expanded}
    >
      <div
        className={`${
          props.expanded ? "lg:grid lg:grid-cols-2" : "flex flex-col"
        }`}
      >
        <a
          href="https://chromewebstore.google.com/detail/twitch-bonus-chest-auto-c/pdjfehhlnpmhgdkoplaoiigclmkoifgb"
          target="_blank"
        >
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/twitch-extension.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="Auto Bonus Chest Claimer Twitch Extension"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Chrome Extension for Twitch</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-yellow-500 rounded-lg text-black">
                  Javascript
                </div>
                <div className="px-2 bg-purple-500 rounded-lg">75+ users</div>
              </div>
              <p className="text-sm">
                I&apos;ve made this extension in other to learn a new field of
                creation and user interaction. It lead me to explore the
                possiblities and process of uploading an extension pubicly and
                having recurrent users over time.
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a href="https://league-of-search.vercel.app/" target="_blank">
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/league-of-search.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="League Of Search"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">League Of Search</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-pink-500 rounded-lg text-black">
                  NextJS
                </div>
                <div className="px-2 bg-red-500 rounded-lg">SSR/CSR</div>
              </div>
              <p className="text-sm">
                Search any League Of Legend player&apos;s stats, on any server.
                View his champion levels, last games and ranks. I&apos;ve done
                this project to learn NextJS and playing with SSR, CSR and the
                Riot Games API.{" "}
                <span className="text-sm italic text-stone-500">
                  (The api key needs to be renewed everyday, so you can see a
                  demo on my{" "}
                  <a
                    href="https://www.linkedin.com/posts/antonylanglois_nextjs-tailwindcss-typescript-activity-7040039003030441984-e4y0?utm_source=share&utm_medium=member_desktop"
                    className="underline"
                    target="_blank"
                  >
                    linked post
                  </a>{" "}
                  or contact me)
                </span>
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a href="https://simple-transfer.antonylanglois.com/" target="_blank">
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/simple-transfer.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="Simple file transfer application"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Simple Transfer</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-orange-500 rounded-lg">Python</div>
                <div className="px-2 bg-purple-500 rounded-lg">Flask</div>
              </div>
              <p className="text-sm">
                An online file transfer application. This fullstack project
                taught me so much about setting up an Ubuntu VPS with Nginx and
                Gunicorn to deploy a Flask API. It also included SSL
                certificates and DNS redirections.{" "}
                {/* <span className="text-sm italic text-stone-500">
                  Service currently off, you can see a demo video on my linked
                  in post
                </span> */}
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a
          href="https://www.linkedin.com/posts/antonylanglois_reverseengineering-python-flask-activity-7170815952886943745-9v6h?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/vinbot.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="VinBot"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">VinBot</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-orange-500 rounded-lg">Python</div>
                <div className="px-2 bg-purple-500 rounded-lg">Automation</div>
                <div className="px-2 bg-red-500 rounded-lg">
                  Reverse Engineering
                </div>
              </div>
              <p className="text-sm">
                As a student project with Lilian Hammache, we decided to reverse
                engineer the Vinted website to receive notifications on Discord
                as soon as products are posted online.
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a href="https://saeromchong.com/" target="_blank">
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/saerom-portfolio.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="Saerom Chong Portfolio"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">
                정새롬 (Saerom Chong) Portfolio
              </h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-pink-500 rounded-lg">Figma</div>
                <div className="px-2 bg-green-500 text-black rounded-lg">
                  Web Development
                </div>
              </div>
              <p className="text-sm">
                From the creation of the Figma mockups to the online release
                this portfolio was made to help her apply to companies with an
                online, innovative and modern resume. She ended up getting a job
                in France and the recruiter complimented her for her refreshing
                portfolio.
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a href="https://4chan-remake.antonylanglois.com" target="_blank">
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/4chan-remake.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="4chan Remake"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">4chan Remake</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-blue-500 rounded-lg">PHP</div>
                <div className="px-2 bg-purple-500 rounded-lg">MVC</div>
              </div>
              <p className="text-sm">
                This project was made in my early days to teach me the MVC
                structure using PHP and storing data for a blog type website
                where people can post images and text anonymously.
              </p>
            </div>
          </div>
          <div className="w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)]" />
        </a>
        <a href="https://minecraft-blog.antonylanglois.com/" target="_blank">
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/croft.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="Minecraft Blog Croft"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">CROFT Minecraft Blog</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-blue-500 rounded-lg">PHP</div>
                <div className="px-2 bg-purple-500 rounded-lg">MVC</div>
              </div>
              <p className="text-sm">
                This project was made in my early days to teach me the MVC
                structure using PHP and storing data for a blog type website
                where people can post images and text anonymously.
              </p>
            </div>
          </div>
          <div
            className={`w-[60px] h-[2px] ml-8 bg-[rgba(255,255,255,0.2)] ${
              props.expanded && "lg:invisible"
            }`}
          />
        </a>
        <a
          href="https://portfolio-wafaghazlani.antonylanglois.com/"
          target="_blank"
        >
          <div
            className={`flex ml-8 mr-8 mb-4 mt-4 gap-6 flex-col ${
              props.expanded ? "lg:flex-col" : "lg:flex-row"
            }`}
          >
            <Image
              width={220}
              height={220}
              src="/wafa-portfolio.png"
              className="rounded-lg w-[220px] h-[128px]"
              alt="Wafa Ghazlani Portfolio"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Wafa Ghazlani Portfolio</h2>
              <div className="flex gap-2 font-bold flex-wrap">
                <div className="px-2 bg-pink-500 rounded-lg">Figma</div>
                <div className="px-2 bg-green-500 text-black rounded-lg">
                  Web Development
                </div>
              </div>
              <p className="text-sm">
                A portfolio made for and in collaboration with Wafa Ghazlani. It
                allowed me to work with a designer and help her in her career
                and reaseach of a job at the time we made it.
              </p>
            </div>
          </div>
        </a>
      </div>
    </Window>
  );
}
