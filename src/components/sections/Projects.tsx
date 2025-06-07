import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpeg";
import project4 from "../../assets/project-4.jpeg";

// constant value
const featuredProjects = [
  {
    id: 1,
    name: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    techStacks: ["React", "Node.js", "AWS", "Docker"],
    image: project1,
    link: "https://github.com/guntza10/mixed-message",
  },
  {
    id: 2,
    name: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    techStacks: ["React", "Node.js", "AWS", "Docker"],
    image: project2,
    link: "https://github.com/guntza10/demo-portfolio",
  },
  {
    id: 3,
    name: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    techStacks: ["React", "Node.js", "AWS", "Docker"],
    image: project3,
    link: "https://github.com/guntza10/spotify-personal-playlist",
  },
  {
    id: 4,
    name: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    techStacks: ["React", "Node.js", "AWS", "Docker"],
    image: project4,
    link: "https://github.com/guntza10/flashcards",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-gradient section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map(
            ({ id, name, description, techStacks, image, link }) => (
              <article key={id} className="card">
                <h4 className="title">{name}</h4>
                <p className="mb-4 text-gray-400">{description}</p>
                <img className="project-image mb-6" src={image} />
                <div className="mb-6">
                  {techStacks.map((tech, index) => (
                    <span key={index} className="badge-skill">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="view-project-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
