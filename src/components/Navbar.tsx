import React, { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // Prevent scrolling when the menu is open (for mobile)
    // This is a workaround for the issue where the body scrolls when the menu is open
    // and the menu is positioned fixed
    // This is not the best solution, but it works for now
    // You can also use a library like react-scroll-lock or react-modal to handle this
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="bg-navbar fixed top-0 left-0 z-40 w-full border-b border-white/10 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Jomphop <span className="text-blue-500">Saibuatong</span>
          </a>

          <div
            className="relative z-40 h-5 w-7 cursor-pointer md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
