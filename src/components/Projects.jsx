import { projects } from "../data";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="mt-20">
      <h1
        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 
      
      text-transparent bg-clip-text font-permanentMarker tracking-widest p-4"
      >
        My Projects
      </h1>
      <div className="w-6/12 lg:w-3/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mx-auto my-8"></div>

      <h2 className=" text-center lg:text-left mt-12 lg:mt-32 md:mt-16 text-2xl md:text-3xl tracking-wide w-9/12 m-auto font-medium">
        Here are the various projects that I have built. This list is
        ever-growing so check back regularly to see my latest works.
      </h2>

      <div className="grid grid-cols-1 my-12 lg:grid-cols-2 gap-12">
        {projects.map((project) => {
          return (
            <Fade duration={1500} cascade>
              <div
                className="card mx-8 lg:mx-24 my-4 lg:my-12 p-4 bg-black shadow-xl "
                key={project.image}
              >
                <figure>
                  <img
                    className="rounded-3xl"
                    src={project.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="pt-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="card-actions justify-end"
                  >
                    <button className="btn btn-primary">Learn More</button>
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
