import { Linkedin, Facebook } from "lucide-react";
import { strings } from "@/lib/strings";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";

type FooterProps = {
  theme?: "dark" | "light";
};

export const Footer = ({ theme = "dark" }: FooterProps) => {
  const isLight = theme === "light";

  const linkClasses = cn("transition-colors duration-200 text-white/80 hover:text-white");

  const socialClasses = cn(
    "w-10 h-10 text-white flex items-center justify-center transition-colors duration-200 text-foreground/70 hover:text-foreground",
  );

  return (
    <footer className={cn("py-24 text-white", isLight ? "bg-[rgba(0,0,0,0.55)]" : "bg-background")}> 
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand Column */}
          <div className="flex-shrink-0">
            <img src={Logo} alt={strings.nav.logo} className="h-10 w-auto mb-3" />
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
                href={strings.footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClasses}
                aria-label={strings.social.facebook}
              >
                <Facebook size={20} />
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
