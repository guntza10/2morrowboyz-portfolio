import { featuredProjects } from "../../utils/constant";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-gradient section-title">Personal Projects</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map(
            ({
              id,
              name,
              description,
              techStacks,
              image,
              github_url,
              live_demo_url,
            }) => (
              <article key={id} className="card">
                <h4 className="title">{name}</h4>
                <p className="mb-4 text-gray-400">{description}</p>
                <a
                  href={live_demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="project-image mb-6" src={image} />
                </a>

                <div className="mb-6 flex flex-wrap gap-2">
                  {techStacks.map((tech, index) => (
                    <span key={index} className="badge-skill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <a
                    className="btn-third"
                    href={live_demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn-third"
                    href={github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
