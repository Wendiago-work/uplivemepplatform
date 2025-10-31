import { strings } from "@/lib/strings";
import { Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/careers') {
      setIsLightMode(false);
      return;
    }

    const handleScroll = () => {
      const ourTeamsSection = document.getElementById('our-teams');
      if (ourTeamsSection) {
        const rect = ourTeamsSection.getBoundingClientRect();
        // Check if the Our Teams section is near or past the navigation bar
        setIsLightMode(rect.top <= 100);
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
      isLightMode ? 'bg-white/90' : 'bg-background/40'
    }`}>
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <h1 className={`text-2xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-all ${
              isLightMode ? 'text-black' : 'text-foreground'
            }`}>
              {strings.nav.logo}
            </h1>
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#company" className={`nav-link ${isLightMode ? 'text-black' : ''}`}>
                {strings.nav.company}
              </a>
            </li>
            <li>
              <a href="#publishing" className={`nav-link ${isLightMode ? 'text-black' : ''}`}>
                {strings.nav.publishing}
              </a>
            </li>
            <li>
              <Link to="/careers" className={`nav-link ${isLightMode ? 'text-black' : ''}`}>
                {strings.nav.careers}
              </Link>
            </li>
            <li>
              <a href="#news" className={`nav-link ${isLightMode ? 'text-black' : ''}`}>
                {strings.nav.news}
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label={strings.social.linkedin}
            className={`social-icon ${isLightMode ? 'text-black' : ''}`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={strings.social.instagram}
            className={`social-icon ${isLightMode ? 'text-black' : ''}`}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={strings.social.twitter}
            className={`social-icon ${isLightMode ? 'text-black' : ''}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
