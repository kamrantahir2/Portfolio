import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Highlight } from "./hero-highlight";
import { cn } from "../lib/utils";
import { BackgroundGradient } from "./background-gradient";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-20 w-full">
      <div className="landing  bg-black ">
        <div className="landing-container ">
          <div className="relative  h-screen bg-white dark:bg-black">
            <div
              className={cn(
                "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                "[background-image:linear-gradient(to_right,#171717_2px,transparent_2px),linear-gradient(to_bottom,#171717_2px,transparent_2px)]"
              )}
            />

            <h1 className=" md:text-7xl text-7xl lg:text-9xl font-gothicExpanded text-center  text-white relative z-20 md:mb-24 mb-8 pt-56">
              <Highlight className="text-blackdark:text-white">
                Kamran
              </Highlight>
              <span className="hidden md:inline"> Tahir</span>
            </h1>
            <h1 className="md:text-7xl text-7xl lg:text-9xl font-gothicExpanded text-center  text-white relative z-20 mb-4 md:hidden ">
              Tahir
            </h1>

            <h3 className="md:text-2xl text-xl lg:text-3xl text-center text-white relative z-20 mb- mt-4 ">
              Full-stack developer with a focus on{" "}
              <span className="font-semibold text-blue-400">
                intuitive design
              </span>
              ,{" "}
              <span className="font-semibold text-purple-400">
                practical solutions
              </span>
              , and{" "}
              <span className="font-semibold text-green-400">
                solving real problems
              </span>
              .
            </h3>

            <div className="h-40 relative mt-10">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}

              <div className="">
                <div className="pt-12">
                  <button
                    className="bg-gradient-to-l from-purple-700 to-cyan-700 bordehover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 border-none  text-gray-50 w-36 h-12"
                    onClick={() => navigate("/projects")}
                  >
                    My Projects
                  </button>
                  <a href="https://github.com/kamrantahir2" target="_blank">
                    <button className="bg-gradient-to-l from-purple-800 to-cyan-700 bordehover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 border-none  text-gray-50 w-36 h-12 mx-4">
                      My Github
                    </button>
                  </a>
                  <button
                    className="bg-gradient-to-l from-purple-800 to-cyan-700 bordehover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 border-none  text-gray-50 w-36 h-12 my-4"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              {/* Radial Gradient to prevent sharp edges */}
            </div>
          </div>
        </div>
      </div>

      <Fade duration={700} cascade triggerOnce>
        <div className="w-8/12 mt-12 m-auto">
          <h1 className=" text-6xl font-gothicExpanded font-semibold relative z-10">
            About Me
          </h1>
          <div className="lg:w-3/12 md:w-6/12 w-9/12 relative md:bottom-10 md:left-10 bottom-20 left-8 z-0 h-5 md:h-8 rounded-ful bg-gradient-to-r from-red-600 to-blue-700 my-4 m-auto"></div>
        </div>
        <div className="grid m-auto lg:grid-cols-2 grid-cols-1 container">
          <Slide duration={800} triggerOnce>
            <h3 className="mt-8 mb-20 text-2xl lg:ml-28 m-auto leading-relaxed md:text-left col-span-10 lg:col-span-1  lg:w-full w-10/12">
              I am a full-stack developer with a passion for problem solving and
              expanding my knowledge. Originally focusing on building backends
              using Java and Spring Boot, I now also build full-stack
              applications using React and NodeJS.
              <br />
              <br />
              As a self-taught developer my biggest motivators are personal
              projects. By creating applications I am able to challenge myself
              and teach myself new skills while taking an idea and turning it
              into a reality.
            </h3>
            <img
              src="./tools-and-utensils.png"
              className=" w-4/12 md:w-6/12 m-auto lg:w-8/12 lg:ml-32 rounded-full"
              alt=""
            />
          </Slide>
        </div>
      </Fade>

      <div className="mb-40 lg:pt-8">
        <div className="w-8/12 mt-12 m-auto">
          <Slide triggerOnce cascade>
            <h1 className="font-semibold text-6xl">Languages and Tools</h1>
            <div className="w-5/12 h-0.5 rounded-full bg-gradient-to-r from-green-500 to-blue-300 mt-4 m-auto"></div>
          </Slide>
        </div>

        <div className="showcase container m-auto">
          <div className="mt-12 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
            <div className="grouped mx-10 lg:mb-0 mb-20">
              <Fade triggerOnce>
                <h3 className="text-3xl">Languages</h3>
                <div className="divider"></div>
              </Fade>
              <div className="icons gap-4  m-auto lg:grid-cols-3 grid-cols-2  grid mt-8">
                <Fade
                  cascade
                  delay={250}
                  duration={750}
                  triggerOnce
                  damping={0.2}
                >
                  <div className="icon">
                    <img
                      src="./js.png"
                      className="w-14 rounded-xl m-auto"
                      alt=""
                    />
                    <h2>JS</h2>
                  </div>
                  <div className="icon">
                    <img src="./java.png" className="w-14 m-auto" alt="" />
                    <h2 className="">Java</h2>
                  </div>
                  <div className="icon">
                    <img
                      src="./typescript.png"
                      className="w-14 m-auto"
                      alt=""
                    />
                    <h2>Typescript</h2>
                  </div>
                  <div className="icon">
                    <img src="./html.png" className="w-14 m-auto" alt="" />
                    <h2>HTML</h2>
                  </div>
                  <div className="icon">
                    <img src="./css.png" className="w-14 m-auto" alt="" />
                    <h2>CSS</h2>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="grouped mx-10 lg:mb-0 mb-20">
              <Fade triggerOnce>
                <h3 className="text-3xl ">Libraries & Frameworks</h3>

                <div className="divider"></div>
              </Fade>
              <div className="icons mt-8 gap-4 grid lg:grid-cols-3 grid-cols-2 ">
                <Fade
                  cascade
                  delay={250}
                  duration={750}
                  triggerOnce
                  damping={0.2}
                >
                  <div className="icon">
                    <img
                      src="./nodejs.png"
                      className="w-14 rounded-xl m-auto"
                      alt=""
                    />
                    <h2>Node.js</h2>
                  </div>
                  <div className="icon">
                    <img src="./physics.png" className="w-14 m-auto" alt="" />
                    <h2>React</h2>
                  </div>
                  <div className="icon">
                    <img src="./express.png" className="w-14 m-auto" alt="" />
                    <h2>Express</h2>
                  </div>
                  <div className="icon">
                    <img
                      src="./springboot.png"
                      className="w-14 m-auto"
                      alt=""
                    />
                    <h2>Spring Boot</h2>
                  </div>
                  <div className="icon">
                    <img src="./tailwind.png" className="w-14 m-auto" alt="" />
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="icon">
                    <img
                      src="./framer-motion.png"
                      className="w-14 m-auto"
                      alt=""
                    />
                    <h2>Framer Motion</h2>
                  </div>
                  <div className="icon">
                    <img src="./bootstrap.png" className="w-14 m-auto" alt="" />
                    <h2>Bootstrap</h2>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="grouped mx-10">
              <Fade triggerOnce>
                <h3 className="text-3xl ">Databases</h3>

                <div className="divider"></div>
              </Fade>
              <div className="icons mt-8 grid lg:grid-cols-3 grid-cols-2 gap-8">
                <Fade
                  cascade
                  delay={250}
                  duration={750}
                  triggerOnce
                  damping={0.2}
                >
                  <div className="icon">
                    <img
                      src="./postgresql.png"
                      className="w-14 rounded-xl m-auto"
                      alt=""
                    />
                    <h2>PostgreSQL</h2>
                  </div>
                  <div className="icon">
                    <img src="./mongodb.png" className="w-14 m-auto" alt="" />
                    <h2>MongoDB</h2>
                  </div>
                  <div className="icon">
                    <img src="./mysql.png" className="w-14 m-auto" alt="" />
                    <h2>MySQL</h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
