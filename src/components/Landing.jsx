import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="">
      <div className="n h-2/12 hero bg-black pt-12">
        <div className="landing-container">
          <motion.div
            className="landing-bg"
            animate={{ backgroundSize: "100%" }}
            initial={{ backgroundSize: "200%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 100,
              repeatType: "mirror",
              repeatDelay: 0.2,
            }}
          />
        </div>

        <div className="relative -inset-y-28 inline-block">
          <h3 className=" text-3xl w-9/12 m-auto text-left">Hey, my name is</h3>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text font-permanentMarker">
            Kamran Tahir
          </h1>
          <h2 className=" text-left mt-16 text-4xl tracking-wide w-9/12 m-auto font-medium">
            I build full-stack applications using React & NodeJS and backends
            using Java and Spring Boot.
          </h2>

          <div className="flex ml-48 justify-start mt-12">
            <button className="bg-gradient-to-t from-indigo-800 to-cyan-700 border-none text-gray-50 hover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 w-36 ">
              My Github
            </button>
            <button className="bg-gradient-to-t from-indigo-800 to-cyan-700 bordehover:bg-gradient-to-t hover:from-indigo-900 hover:to-cyan-900 border-none  text-gray-50 ml-12 w-36 h-12">
              My Projects
            </button>
          </div>
        </div>
      </div>

      <div className="w-8/12 mt-12 m-auto">
        <h1 className="font-semibold text-6xl">About Me</h1>
        <div className="w-3/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mt-4 m-auto"></div>
      </div>
      <div className="flex container">
        <h3 className="mt-8 mb-20 text-2xl w-6/12 m-auto leading-relaxed text-left">
          I am a full-stack developer with a passion for problem solving and
          expanding my knowledge. Originally focusing on building backends using
          Java and Spring Boot, I now also build full-stack applications using
          React and NodeJS.
          <br />
          <br />
          As a self-taught developer my biggest motivators are personal
          projects. By creating applications I am able to challenge myself and
          teach myself new skills while taking an idea and turning it into a
          reality.
        </h3>
        <img
          src="./tools-and-utensils.png"
          className=" w-3/12 -ml-24 mr-32 h-3/4 m-auto  rounded-full"
          alt=""
        />
      </div>

      <div className="mb-40">
        <div className="w-8/12 mt-12 m-auto">
          <h1 className="font-semibold text-6xl">Languages and Tools</h1>
          <div className="w-5/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mt-4 m-auto"></div>
        </div>

        <div className="showcase">
          <div className="mt-12">
            <div className="grouped">
              <h3 className="text-3xl">Languages</h3>
              <div className="icons mt-8">
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
                  <h2>Java</h2>
                </div>
                <div className="icon">
                  <img src="./typescript.png" className="w-14 m-auto" alt="" />
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
              </div>
            </div>
            <div className="grouped">
              <h3 className="text-3xl mt-4">Libraries & Frameworks</h3>
              <div className="icons mt-8">
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
                  <img src="./springboot.png" className="w-14 m-auto" alt="" />
                  <h2>Spring Boot</h2>
                </div>
                <div className="icon">
                  <img src="./tailwind.png" className="w-14 m-auto" alt="" />
                  <h2>Tailwind CSS</h2>
                </div>
                <div className="icon">
                  <img src="./bootstrap.png" className="w-14 m-auto" alt="" />
                  <h2>Bootstrap</h2>
                </div>
              </div>
            </div>
            <div className="grouped">
              <h3 className="text-3xl mt-4">Databases</h3>
              <div className="icons mt-8">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
