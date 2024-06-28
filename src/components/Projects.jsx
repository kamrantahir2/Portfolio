import { projects } from "../data";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect } from "react";

const Projects = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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

      <Fade cascade triggerOnce duration={750}>
        <div className=" flex flex-row flex-wrap w-full mt-20 lg:mt-24 mb-12 lg:grid-cols-2 ">
          {projects.map((project) => {
            return (
              <div
                className="card mx-4 lg:mx-24 my-4 lg:my-12 p-4 bg-black shadow-xl py-8 md:w-4/12"
                key={project.image}
              >
                <figure>
                  <img className="rounded-3xl card-img" src={project.image} />
                </figure>

                <div className="card-body">
                  <h2 className="card-title  lg:w-9/12 text-2xl">
                    {project.title}
                  </h2>
                  <h2
                    className="text-left text-lg border-b-2 border-cyan-500 mt-2 pb-5
                  pl-5"
                  >
                    - {project.subtitle}
                  </h2>
                  <p className="lg:p-4 md:mb-12 text-lg lg:h-52 leading-8">
                    {project.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-4 mx-3 mt-8">
                  {project.tags.map((tag) => {
                    return (
                      <div key={tag} className="">
                        <p className=" rounded-full lg:bg-blue-500 lg:p-1 text-sm text-cyan-500  lg:text-black font-semibold">
                          {tag}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="card-actions justify-end"
                >
                  <button className="btn m-auto lg:m-0 bg-cyan-300 text-black font-bold hover:bg-cyan-200">
                    Learn More
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
