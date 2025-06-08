import demoPortfolio from "../../assets/demo-portfolio.jpg";
import myPortFolio from "../../assets/my-portfolio.jpg";
import jamming from "../../assets/jamming.jpg";
import flashcards from "../../assets/flash-cards.png";

// constant value
const featuredProjects = [
  {
    id: 1,
    name: "demo-portfolio",
    description:
      "For this project, you will build a personal portfolio site, a static website where you can share the projects that you build in this Path. Typically, a portfolio website will have a main page that features different projects that you’ve built and another page that contains contact information, in case someone wants to reach out to you. Occasionally, there are additional pages for each project, detailing the technology used.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    image: demoPortfolio,
    link: "https://github.com/guntza10/demo-portfolio",
  },
  {
    id: 2,
    name: "my-portfolio",
    description:
      "For this project, you will build a personal portfolio site, a static website where you can share the projects that you build in this Path. Typically, a portfolio website will have a main page that features different projects that you’ve built and another page that contains contact information, in case someone wants to reach out to you. Occasionally, there are additional pages for each project, detailing the technology used.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    image: myPortFolio,
    link: "https://github.com/guntza10/my-portfolio",
  },
  {
    id: 3,
    name: "spotify-personal-playlist",
    description:
      "Jammming is a React web application that allows users to search the Spotify library, preview each track, create a custom playlist, save it to their Spotify account and view custom playlist after creation playlist. This project demonstrates how to integrate React components, state management, and API requests to create a functional and interactive web experience.",
    techStacks: ["React", "HTML", "CSS", "JavaScript"],
    image: jamming,
    link: "https://github.com/guntza10/spotify-personal-playlist",
  },
  {
    id: 4,
    name: "Flashcards Quiz App",
    description:
      "This project is a flashcard-style quiz app built with React, Redux, and Redux Toolkit. Users can create topics, quizzes within those topics, and flashcards for each quiz. The app also allows users to interact with quizzes by flipping flashcards to review content.",
    techStacks: ["React", "Redux", "HTML", "CSS", "JavaScript"],
    image: flashcards,
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
