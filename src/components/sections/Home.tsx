import profileImage from "../../assets/profile-image.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="text-center">
        <img
          src={profileImage}
          className="mx-auto mb-8 h-80 w-80 rounded-full border-6 border-blue-500 object-cover object-bottom-right shadow-2xl md:h-120 md:w-120"
        />

        <h1 className="text-gradient mb-6 text-3xl font-bold md:text-6xl">
          Hi, I'm Jomphop Saibuatong
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200 md:max-w-3xl">
          I'm a Software Developer who believes strong fundamentals are the
          foundation of great software. I constantly refine the basics to
          sharpen my skills and stay ready to learn and adapt to new stacks and
          tools as needed.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a href="#project" className="btn-primary">
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
