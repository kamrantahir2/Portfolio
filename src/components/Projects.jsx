import { projects } from "../data";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="bg-black py-20 lg:py-40 portfolio-header">
        <Slide triggerOnce direction="left" cascade duration={1000}>
          <h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 
      
      text-transparent bg-clip-text font-permanentMarker tracking-widest p-4"
          >
            My Projects
          </h1>
          <div className="w-6/12 lg:w-3/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mx-auto my-8"></div>

          <h2 className=" text-center lg:text-left mt-12 lg:mt-32 md:mt-16 text-2xl md:text-3xl tracking-wide w-9/12  m-auto font-medium ">
            Here you will find the various projects that I have built. This list
            is ever-growing so check back regularly to see my latest works.
          </h2>
        </Slide>
      </div>
      <div className=" grid grid-cols-1 mt-20 lg:mt-24 mb-12 lg:grid-cols-2   gap-12 grid-flow-rows">
        {projects.map((project) => {
          return (
            <Fade duration={1000} cascade key={project.image} triggerOnce>
              <div className="card mx-8 lg:mx-24 lg:my-12 p-4 bg-black shadow-xl pt-8">
                <img className="rounded-3xl card-img" src={project.image} />

                <div className="card-body">
                  <h2 className="card-title border-b-2 border-cyan-500 pb-5 lg:w-9/12">
                    {project.title}
                  </h2>
                  <p className="p-4 lg:h-40">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="card-actions justify-end"
                  >
                    <button className="btn bg-cyan-300 text-black font-bold">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
