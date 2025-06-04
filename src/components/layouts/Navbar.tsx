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
          <a href="#home" className="font-mono text-xl font-bold">
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
      </nav>
    </header>
  );
};

export default memo(Navbar);
