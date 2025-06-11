import { useCallback, useState } from "react";

import { Toaster } from "sonner";
import LoadingScreen from "./components/shared/LoadingScreen";
import Navbar from "./components/layouts/Navbar";
import MobileMenu from "./components/layouts/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import RevealOnScroll from "./components/sections/RevealOnScroll";
import Footer from "./components/layouts/Footer";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

// constant value
const socialLinks = [
  {
    key: "GitHub",
    href: "https://github.com/guntza10",
    icon: <GithubIcon size={20} />,
  },
  {
    key: "LinkedIn",
    href: "https://www.linkedin.com/in/jomphop-saibuatong-331981212",
    icon: <LinkedinIcon size={20} />,
  },
  {
    key: "Instagram",
    href: "https://www.instagram.com/2morrownomad",
    icon: <InstagramIcon size={20} />,
  },
];

const App = () => {
  // isLoading
  const [isLoading, setIsLoading] = useState(false);

  const handleCompleteLoading = () => setIsLoading(false);

  // isOpenMobileMenu
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = useCallback(() => setIsOpenMobileMenu(true), []);
  const handleCloseMobileMenu = useCallback(
    () => setIsOpenMobileMenu(false),
    [],
  );

  return (
    <div>
      {/* loading */}
      {isLoading && <LoadingScreen onComplete={handleCompleteLoading} />}

      <div
        className={`transition-opacity duration-700 ease-in ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {/* navbar and mobile menu */}
        <Navbar onOpenMobileMenu={handleOpenMobileMenu} />
        <MobileMenu isOpen={isOpenMobileMenu} onClose={handleCloseMobileMenu} />

        {/* main */}
        <main>
          <RevealOnScroll>
            <Home socialLinks={socialLinks} />
          </RevealOnScroll>
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
        </main>

        {/* footer */}
        <Footer socialLinks={socialLinks} />

        {/* toast */}
        <Toaster position="top-right" richColors />
      </div>
    </div>
  );
};

export default App;
