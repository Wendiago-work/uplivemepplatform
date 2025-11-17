import { strings } from "@/lib/strings";
import { Linkedin, Instagram, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const isHome = location.pathname === "/";

    // Home stays dark; other routes switch to light once past first viewport.
    if (isHome) {
      setIsLightMode(false);
      return;
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      setIsLightMode(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Sync document theme class with nav state so tokens swap globally.
  useEffect(() => {
    const root = document.documentElement;
    if (isLightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isLightMode]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isLightMode ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <h1
              className={`text-2xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-all ${
                "text-white"
              }`}
            >
              {strings.nav.logo}
            </h1>
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {strings.nav.links.map((item) => {
              const linkClasses = `nav-link font-medium text-base px-4 py-2 rounded-full transition-colors ${
                "text-white hover:bg-white/10"
              }`;

              return (
                <li key={item.id}>
                  {item.id === "publishing" ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={linkClasses}>
                        <span className="flex items-center gap-1">
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-primary text-white">
                        <DropdownMenuItem asChild>
                          <Link to="/publishing/apps" className="cursor-pointer">
                            Apps
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/publishing/games" className="cursor-pointer">
                            Games
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : "to" in item ? (
                    <Link to={item.to} className={linkClasses}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={linkClasses}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label={strings.social.linkedin} className={`social-icon ${isLightMode ? "text-white" : ""}`}>
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={strings.social.instagram}
            className={`social-icon ${isLightMode ? "text-white" : ""}`}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label={strings.social.twitter} className={`social-icon ${isLightMode ? "text-white" : ""}`}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
