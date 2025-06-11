import { navigationLinks } from "../../utils/constant";
import { SocialLink } from "../sections/Home";

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer = ({ socialLinks }: FooterProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <div className="flex items-center justify-center gap-4">
        {socialLinks.map(({ key, href, icon }) => (
          <a
            key={key}
            className="icon-style"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        {navigationLinks.map(({ id, name, href }) => (
          <a key={id} href={href} className="nav-link nav-link-animate">
            {name}
          </a>
        ))}
      </div>

      <p>© All Rights Reserved | Jomphop Saibuatong</p>
    </div>
  );
};

export default Footer;
