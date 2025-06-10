import { memo } from "react";

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

const Navbar = ({ onOpenMobileMenu }: NavbarProps) => {
  return (
    <header className="bg-navbar fixed top-0 left-0 z-50 w-full border-b border-white/10 p-4 shadow-lg backdrop-blur-lg">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Name */}
          <a
            href="#home"
            className="font-mono text-xl font-bold transition-transform duration-300 hover:scale-110"
          >
            Jomphop <span className="text-gradient">Saibuatong</span>
          </a>

          {/* Hamburger menu */}
          <div
            className="nav-link cursor-pointer md:hidden"
            onClick={onOpenMobileMenu}
          >
            &#9776;
          </div>

          {/* Nav link */}
          <div className="hidden items-center gap-6 md:flex">
            <a href="#home" className="nav-link nav-link-animate">
              Home
            </a>
            <a href="#about" className="nav-link nav-link-animate">
              About
            </a>
            <a href="#projects" className="nav-link nav-link-animate">
              Projects
            </a>
            <a href="#contact" className="nav-link nav-link-animate">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
