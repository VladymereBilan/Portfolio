import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Vlad!</p>
            <p className="subtext">
              I'm a student at New Era University studying web development.
              I work with Python, Laravel, JavaScript and React (MERN) to build
              modern web applications. I'm also pursuing cybersecurity studies
              with the goal of joining a SOC (Security Operations Center) team —
              currently learning SIEM, incident response, and network security.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card
              style={{ rotate: "70deg", top: "28%", left: "18%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "62%", left: "44%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "95deg", bottom: "28%", left: "68%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "52%", left: "2%" }}
              text="OWASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "8%", left: "36%" }}
              text="SIEM"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "22deg", top: "72%", left: "72%" }}
              text="CTF"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-50deg", top: "70%", left: "24%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "6%", left: "10%" }}
              image="assets/logos/Python.jpg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "40%", left: "60%" }}
              image="assets/logos/NodeJS.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Guess where I am from? Hint. Near Russia
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack & Focus</p>
            <p className="subtext">
              Languages & Frameworks: Python, Laravel, JavaScript, React/Node (MERN),
              Tailwind CSS, Vite.
              <br />
              Security focus: learning SIEM, incident response, log analysis,
              and SOC workflows to transition into cybersecurity operations.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
