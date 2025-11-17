import { Linkedin, Instagram } from "lucide-react";
import { strings } from "@/lib/strings";
import { cn } from "@/lib/utils";

type FooterProps = {
  theme?: "dark" | "light";
};

export const Footer = ({ theme = "dark" }: FooterProps) => {
  const isLight = theme === "light";

  const linkClasses = cn("transition-colors duration-200 text-white/80 hover:text-foreground");

  const socialClasses = cn(
    "w-10 h-10 text-white flex items-center justify-center transition-colors duration-200 text-foreground/70 hover:text-foreground",
  );

  return (
    <footer className={cn("py-24 bg-primary text-white")}> 
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand Column */}
          <div className="flex-shrink-0">
            <h3 className={cn("text-2xl font-bold mb-2 text-white")}> 
              {strings.nav.logo}
            </h3>
            <p className={cn("text-sm mb-6 text-white/80")}> 
              {strings.footer.tagline}
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href={strings.footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
                aria-label={strings.social.linkedin}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={strings.footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
                aria-label={strings.social.instagram}
              >
                <Instagram size={20} />
              </a>
              <a
                href={strings.footer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
                aria-label={strings.social.twitter}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <p className={cn("text-sm text-white/80") }>
              {strings.footer.copyright}
            </p>
          </div>

          {/* Columns Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {/* Services Column */}
            <div>
              <h4 className={cn("text-lg font-semibold mb-4 text-white")}>
                {strings.footer.services.title}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#publishing" className={linkClasses}>
                    {strings.footer.services.publishing}
                  </a>
                </li>
                <li>
                  <a href="#academy" className={linkClasses}>
                    {strings.footer.services.academy}
                  </a>
                </li>
                <li>
                  <a href="#ads" className={linkClasses}>
                    {strings.footer.services.ads}
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us Column */}
            <div>
              <h4 className={cn("text-lg font-semibold mb-4 text-white")}>
                {strings.footer.aboutUs.title}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="company" className={linkClasses}>
                    {strings.footer.aboutUs.company}
                  </a>
                </li>
                <li>
                  <a href="careers" className={linkClasses}>
                    {strings.footer.aboutUs.careers}
                  </a>
                </li>
                <li>
                  <a href="news" className={linkClasses}>
                    {strings.footer.aboutUs.news}
                  </a>
                </li>
                <li>
                  <a href="press" className={linkClasses}>
                    {strings.footer.aboutUs.press}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className={cn("text-lg font-semibold mb-4 text-white")}>
                {strings.footer.legal.title}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#terms" className={linkClasses}>
                    {strings.footer.legal.terms}
                  </a>
                </li>
                <li>
                  <a href="#privacy" className={linkClasses}>
                    {strings.footer.legal.privacy}
                  </a>
                </li>
                <li>
                  <a href="#legal" className={linkClasses}>
                    {strings.footer.legal.legal}
                  </a>
                </li>
                <li>
                  <a href="#cookie-policy" className={linkClasses}>
                    {strings.footer.legal.cookiePolicy}
                  </a>
                </li>
                <li>
                  <a href="#cookie-settings" className={linkClasses}>
                    {strings.footer.legal.cookieSettings}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
