import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="mt-12">
      <div className="m-auto">
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

        <div className="relative -inset-y-28 w-400 inline-block">
          <h3 className=" text-3xl text-left">Hey, my name is</h3>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
            Kamran Tahir
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
