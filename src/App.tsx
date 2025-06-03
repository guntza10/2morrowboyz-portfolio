import { useCallback, useState } from "react";

import LoadingScreen from "./components/shared/LoadingScreen";
import Navbar from "./components/layouts/Navbar";
import MobileMenu from "./components/layouts/MobileMenu";
import Home from "./components/sections/Home";

function App() {
  // isLoaded
  const [isLoaded, setIsLoaded] = useState(false);

  const handleCompleted = () => setIsLoaded(true);

  // menuOpen
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleted={handleCompleted} />}
      <div
        className={`min-h-screen text-gray-700 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        <Navbar onOpenMenu={handleOpenMenu} />
        <MobileMenu menuOpen={menuOpen} onCloseMenu={handleCloseMenu} />
        <Home />
      </div>
    </>
  );
}

export default App;
