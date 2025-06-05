// constant value
const frontendSkills = ["HTML", "CSS", "React", "Vue.js", "Next.js"];
const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "SQL"];
const programmingLanguages = ["JavaScript", "Typescript", "Go"];

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-gradient mb-8 text-center text-3xl font-bold">
          About Me
        </h1>

        <article className="card mb-8">
          <p className="mb-6 text-gray-300">
            A passionate developer dedicated to crafting scalable web
            applications and innovative digital solutions.
          </p>

          <div className="skill-blog mb-6">
            <h4 className="title">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span className="badge-skill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-blog mb-6">
            <h4 className="title">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span className="badge-skill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-blog">
            <h4 className="title">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((skill) => (
                <span className="badge-skill">{skill}</span>
              ))}
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="card flex-1">
            <h4 className="title">🏫 Education</h4>
            <ul className="list-inside list-disc space-y-4 text-gray-300">
              <li>
                <strong>Khon Kaen University (2014 - 2018)</strong>
                <ul className="mt-2 ml-4 list-inside list-disc">
                  <li>B.Eng. in Computer Engineering</li>
                </ul>
              </li>
              <li>
                <strong>Codecademy Platform</strong>
                <ul className="mt-2 ml-4 list-inside list-disc">
                  <li>Full-Stack Engineering</li>
                  <li>Front-End Engineering</li>
                  <li>Back-End Engineering</li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="card flex-1">
            <h4 className="title">💼 Work Experience</h4>
            <ul className="list-inside list-disc space-y-4 text-gray-300">
              <li>
                <strong>
                  Full-Stack Developer at 2Bsimple (2021 - Present)
                </strong>
                <p className="mt-4">
                  Designed and developed internal platforms and CMS solutions
                  across multiple teams. Collaborated on projects from planning
                  to deployment, with a focus on usability and maintainability.
                </p>
              </li>
              <li>
                <strong>
                  Software Developer at Varobol Co., Ltd. (2018 - 2021)
                </strong>
                <p className="mt-4">
                  Built and maintained web applications for government-related
                  projects. Worked in an Agile team environment and participated
                  in regular code improvement sessions.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
