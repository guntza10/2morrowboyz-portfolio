import { useCallback, useState } from "react";

import { Toaster } from "sonner";
import LoadingScreen from "./components/shared/LoadingScreen";
import Navbar from "./components/layouts/Navbar";
import MobileMenu from "./components/layouts/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);

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
          <Home />
          <About />
          <Projects />
          <Contact />

          {/* toast */}
          <Toaster position="top-right" richColors />
        </main>

        {/* footer */}
        <footer></footer>
      </div>
    </div>
  );
};

export default App;
