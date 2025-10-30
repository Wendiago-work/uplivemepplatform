import { Linkedin, Instagram } from "lucide-react";
import { strings } from "@/lib/strings";

export const Footer = () => {
  return (
    <footer className="bg-background py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{strings.nav.logo}</h3>
            <p className="text-foreground/70 mb-6">{strings.footer.tagline}</p>
            <div className="flex gap-3">
              <a
                href={strings.footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={strings.social.linkedin}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={strings.footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={strings.social.instagram}
              >
                <Instagram size={20} />
              </a>
              <a
                href={strings.footer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={strings.social.twitter}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-column-title">{strings.footer.services.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#publishing" className="footer-link">
                  {strings.footer.services.publishing}
                </a>
              </li>
              <li>
                <a href="#academy" className="footer-link">
                  {strings.footer.services.academy}
                </a>
              </li>
              <li>
                <a href="#ads" className="footer-link">
                  {strings.footer.services.ads}
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="footer-column-title">{strings.footer.aboutUs.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#company" className="footer-link">
                  {strings.footer.aboutUs.company}
                </a>
              </li>
              <li>
                <a href="#careers" className="footer-link">
                  {strings.footer.aboutUs.careers}
                </a>
              </li>
              <li>
                <a href="#news" className="footer-link">
                  {strings.footer.aboutUs.news}
                </a>
              </li>
              <li>
                <a href="#press" className="footer-link">
                  {strings.footer.aboutUs.press}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="footer-column-title">{strings.footer.legal.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#terms" className="footer-link">
                  {strings.footer.legal.terms}
                </a>
              </li>
              <li>
                <a href="#privacy" className="footer-link">
                  {strings.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="#legal" className="footer-link">
                  {strings.footer.legal.legal}
                </a>
              </li>
              <li>
                <a href="#cookie-policy" className="footer-link">
                  {strings.footer.legal.cookiePolicy}
                </a>
              </li>
              <li>
                <a href="#cookie-settings" className="footer-link">
                  {strings.footer.legal.cookieSettings}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm">
            {strings.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
