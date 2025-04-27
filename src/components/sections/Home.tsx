import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl">
        Hi, I'm Jomphop Saibuatong
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-white">
        I'm a Software Developer who believes strong fundamentals are the
        foundation of great software. I constantly refine the basics to sharpen
        my skills and stay ready to learn and adapt to new stacks and tools as
        needed.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#projects" className="btn hover-btn bg-blue-500 text-white">
          View Projects
        </a>

        <a
          href="#contact"
          className="btn hover-btn border border-blue-500/50 text-blue-500 hover:bg-blue-500/10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
