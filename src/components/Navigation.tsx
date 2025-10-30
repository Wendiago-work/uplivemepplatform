import { strings } from "@/lib/strings";
import { Linkedin, Instagram } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {strings.nav.logo}
          </h1>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#company" className="nav-link">
                {strings.nav.company}
              </a>
            </li>
            <li>
              <a href="#publishing" className="nav-link">
                {strings.nav.publishing}
              </a>
            </li>
            <li>
              <a href="#careers" className="nav-link">
                {strings.nav.careers}
              </a>
            </li>
            <li>
              <a href="#news" className="nav-link">
                {strings.nav.news}
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label={strings.social.linkedin}
            className="social-icon"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={strings.social.instagram}
            className="social-icon"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={strings.social.twitter}
            className="social-icon"
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
