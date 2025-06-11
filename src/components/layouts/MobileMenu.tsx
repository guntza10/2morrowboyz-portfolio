import { memo } from "react";
import { navigationLinks } from "../../utils/constant";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex w-full flex-col items-center justify-center gap-8 bg-black/80 transition-all duration-300 ease-in-out ${isOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
    >
      {/* close button */}
      <button
        className="absolute top-4 right-4 text-4xl font-semibold hover:cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>

      {/* nav link */}
      {navigationLinks.map(({ id, name, href }) => (
        <a
          key={id}
          href={href}
          className="nav-link-for-mobile nav-link-animate"
          onClick={onClose}
        >
          {name}
        </a>
      ))}
    </div>
  );
};

export default memo(MobileMenu);
