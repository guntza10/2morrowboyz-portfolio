import React, { useEffect } from "react";

interface MobileMenuProps {
  menuOpen: boolean;
  onCloseMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, onCloseMenu }) => {
  useEffect(() => {
    // Prevent scrolling when the menu is open (for mobile)
    // This is a workaround for the issue where the body scrolls when the menu is open
    // and the menu is positioned fixed
    // This is not the best solution, but it works for now
    // You can also use a library like react-scroll-lock or react-modal to handle this
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`bg-navbar fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
    >
      <button
        onClick={onCloseMenu}
        className="absolute top-6 right-6 cursor-pointer text-3xl text-white focus:outline-none"
      >
        &times;
      </button>

      <a href="#home" className="nav-link-mobile" onClick={onCloseMenu}>
        Home
      </a>
      <a href="#about" className="nav-link-mobile" onClick={onCloseMenu}>
        About
      </a>
      <a href="#projects" className="nav-link-mobile" onClick={onCloseMenu}>
        Projects
      </a>
      <a href="#contact" className="nav-link-mobile" onClick={onCloseMenu}>
        Contact
      </a>
    </div>
  );
};

export default React.memo(MobileMenu);
