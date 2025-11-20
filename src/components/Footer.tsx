import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { strings } from "@/lib/strings";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="relative bg-[#3d2968] text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left Quick Links */}
          <div className="lg:col-span-3">
            <nav className="space-y-2">
              <a href="#services" className="block text-5xl lg:text-6xl font-bold hover:text-primary transition-colors">
                Services
              </a>
              <a href="#games" className="block text-5xl lg:text-6xl font-bold hover:text-primary transition-colors" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>
                Our Games
              </a>
              <a href="#news" className="block text-5xl lg:text-6xl font-bold hover:text-primary transition-colors">
                News
              </a>
              <a href="#contact" className="block text-5xl lg:text-6xl font-bold hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Right Columns Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Our Studio Column */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-white/60 tracking-wider uppercase">
                Our Studio
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/company" className="text-white hover:text-primary transition-colors text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/company#team" className="text-white hover:text-primary transition-colors text-base">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white hover:text-primary transition-colors text-base">
                    Our Games
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-white hover:text-primary transition-colors text-base">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-white/60 tracking-wider uppercase">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#game-design" className="text-white hover:text-primary transition-colors text-base">
                    Game Design
                  </a>
                </li>
                <li>
                  <a href="#game-dev" className="text-white hover:text-primary transition-colors text-base">
                    Game Development
                  </a>
                </li>
                <li>
                  <a href="#art" className="text-white hover:text-primary transition-colors text-base">
                    Art Director
                  </a>
                </li>
                <li>
                  <a href="#multiplatform" className="text-white hover:text-primary transition-colors text-base">
                    Multiplatform
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-white/60 tracking-wider uppercase">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#community" className="text-white hover:text-primary transition-colors text-base">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-white hover:text-primary transition-colors text-base">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#license" className="text-white hover:text-primary transition-colors text-base">
                    License
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-white hover:text-primary transition-colors text-base">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get In Touch & Follow Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold mb-4 text-white/60 tracking-wider uppercase">
              Get In Touch
            </h4>
            <a href="mailto:hitboox@example.com" className="text-white hover:text-primary transition-colors text-base">
              hitboox@example.com
            </a>
          </div>
          <div className="lg:col-span-9 lg:text-right">
            <h4 className="text-xs font-semibold mb-4 text-white/60 tracking-wider uppercase">
              Follow Us
            </h4>
            <div className="flex gap-4 lg:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://store.steampowered.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Steam"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative rounded-3xl bg-[#2d2256]/50 border border-white/10 p-8 lg:p-12 overflow-hidden">
          {/* Controller Image */}
          <div className="absolute left-8 bottom-0 w-64 h-64 opacity-80 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop" 
              alt="Gaming Controller" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 max-w-2xl ml-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2">
              Sign up today to get the latest
            </h3>
            <p className="text-xl text-white/80 mb-6">
              inspiration & insights
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 rounded-full px-6"
              />
              <Button className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 flex-shrink-0">
                <span className="text-xl">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © 2025 <a href="/" className="hover:text-primary transition-colors">Hitboox</a>. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
              <span>•</span>
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
