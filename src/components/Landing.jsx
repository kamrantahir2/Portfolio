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
        </div>
      </div>

      <div className="w-8/12 mt-12 m-auto">
        <h1 className="font-semibold text-6xl">About Me</h1>
        <div className="w-3/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mt-4 m-auto"></div>
      </div>
      <div className="inline-flex">
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
          className="h-full w-3/12 pb-20 mr-28 m-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
