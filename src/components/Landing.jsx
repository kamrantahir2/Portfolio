import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

const Landing = () => {
  return (
    <div className="">
      <div className="landing bg-black pt-12 ">
        <div className="landing-container lg:pb-12">
          <Slide
            direction="up"
            duration={1500}
            triggerOnce
            animate={{
              x: 0,
              y: 28,
              scale: 1,
              rotate: 0,
            }}
          >
            <motion.div
              className="bg-[url('/landingBg.png')] m-auto rounded-3xl w-2/3 h-96 bg-no-repeat"
              animate={{ backgroundSize: "100%" }}
              initial={{ backgroundSize: "200%" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 75,
                repeatType: "mirror",
                repeatDelay: 0.2,
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            />
          </Slide>
        </div>

        <div className="relative  -inset-y-60 md:-inset-y-40 inline-block">
          <Slide duration={1000} triggerOnce cascade>
            <h3 className=" text-3xl text-wrap w-9/12 m-auto text-left">
              Hey, my name is
            </h3>

            <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text font-permanentMarker">
              Kamran Tahir
            </h1>

            <h2 className=" text-left mt-16 text-2xl md:text-4xl tracking-wide w-9/12 m-auto font-medium">
              I build full-stack applications using React & NodeJS and APIs
              using Java and Spring Boot.
            </h2>
          </Slide>
        </div>
      </div>

      <Fade duration={1000} cascade triggerOnce>
        <div className="w-8/12 mt-12 m-auto">
          <h1 className="font-semibold text-6xl">About Me</h1>
          <div className="w-3/12 h-0.5 rounded-full bg-gradient-to-r from-green-500 to-blue-300 my-4 m-auto"></div>
        </div>
        <div className="grid m-auto lg:grid-cols-2 grid-cols-1 container">
          <Slide duration={1000} triggerOnce>
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

      <div className="flex justify-center md:justify-start md:ml-48 mt-12">
        <Slide direction="right" triggerOnce>
          <button className="bg-gradient-to-t from-indigo-800 to-cyan-700 border-none text-gray-50 hover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 w-36 ">
            My Github
          </button>
          <button className="bg-gradient-to-t from-indigo-800 to-cyan-700 bordehover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 border-none  text-gray-50 ml-12 w-36 h-12">
            My Projects
          </button>
        </Slide>
      </div>

      <Fade cascade triggerOnce>
        <div className="mb-40 lg:pt-8">
          <div className="w-8/12 mt-12 m-auto">
            <h1 className="font-semibold text-6xl">Languages and Tools</h1>
            <div className="w-5/12 h-0.5 rounded-full bg-gradient-to-r from-green-500 to-blue-300 mt-4 m-auto"></div>
          </div>

          <div className="showcase container m-auto">
            <div className="mt-12 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
              <div className="grouped mx-10 lg:mb-0 mb-16">
                <Fade triggerOnce>
                  <h3 className="text-3xl">Languages</h3>
                  <div className="divider"></div>
                </Fade>
                <div className="icons gap-4  m-auto lg:grid-cols-3 grid-cols-2  grid mt-8">
                  <Fade cascade duration={500} triggerOnce>
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
              <div className="grouped mx-10 lg:mb-0 mb-16">
                <Fade triggerOnce>
                  <h3 className="text-3xl ">Libraries & Frameworks</h3>

                  <div className="divider"></div>
                </Fade>
                <div className="icons mt-8 gap-4 grid lg:grid-cols-3 grid-cols-2 ">
                  <Fade cascade duration={500} triggerOnce>
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
                      <img
                        src="./tailwind.png"
                        className="w-14 m-auto"
                        alt=""
                      />
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
                      <img
                        src="./bootstrap.png"
                        className="w-14 m-auto"
                        alt=""
                      />
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
                  <Fade cascade duration={500} triggerOnce>
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
      </Fade>
    </div>
  );
};

export default Landing;
