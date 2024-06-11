import { projects } from "../data";

const Projects = () => {
  return (
    <div>
      <ul>
        {projects.map((p) => {
          return (
            <div key={p.image}>
              <p>{p.title}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
