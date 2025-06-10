import profileImage from "../../assets/profile-image.jpg";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="section-container">
      <div className="text-center">
        <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
          <img
            src={profileImage}
            className="block h-80 w-80 rounded-full object-cover object-bottom-right shadow-2xl md:h-120 md:w-120"
          />
        </div>

        <h1 className="text-gradient mb-6 text-3xl font-bold md:text-6xl">
          Hi, I'm Jomphop Saibuatong
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200 md:max-w-3xl">
          I'm a Software Developer who believes strong fundamentals are the
          foundation of great software. I constantly refine the basics to
          sharpen my skills and stay ready to learn and adapt to new stacks and
          tools as needed.
        </p>

        <div className="mb-8 flex items-center justify-center gap-4">
          <a
            className="icon-style"
            href="https://github.com/guntza10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={20} />
          </a>
          <a
            className="icon-style"
            href="https://www.linkedin.com/in/jomphop-saibuatong-331981212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            className="icon-style"
            href="https://www.instagram.com/2morrownomad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
