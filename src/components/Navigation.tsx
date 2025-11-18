import { strings } from "@/lib/strings";
import Logo from "@/assets/logo.png";
import { Linkedin, Instagram, ChevronDown, Volume2, VolumeX } from "lucide-react";
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
  // Mute is kept per-page; default muted for autoplay reliability
  const [isMuted, setIsMuted] = useState(true);

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

  // Per-page mute toggle: mute/unmute currently mounted media/iframes
  useEffect(() => {
    const volumeValue = isMuted ? 0 : 1;
    const message = JSON.stringify({ method: "setVolume", value: volumeValue });

    document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((el) => {
      el.muted = isMuted;
      if (!isMuted) el.volume = 1;
    });

    document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
      try {
        frame.contentWindow?.postMessage(message, "*");
      } catch (_err) {
        /* ignore cross-origin failures */
      }
    });
  }, [isMuted]);

  // Keep newly added media (e.g., swapping hero videos) in sync with mute state
  // Re-apply mute state on route change to catch newly mounted media for this page
  useEffect(() => {
    const volumeValue = isMuted ? 0 : 1;
    const message = JSON.stringify({ method: "setVolume", value: volumeValue });
    document.querySelectorAll<HTMLMediaElement>("video, audio").forEach((el) => {
      el.muted = isMuted;
      if (!isMuted) el.volume = 1;
    });
    document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
      try {
        frame.contentWindow?.postMessage(message, "*");
      } catch (_err) {}
    });
  }, [location.pathname, isMuted]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isLightMode ? "bg-[rgba(0,0,0,0.55)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto py-4 px-4 lg:px-6 2xl:px-0 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img
              src={Logo}
              alt={strings.nav.logo}
              className="h-10 w-auto object-contain drop-shadow-md"
            />
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
          <button
            type="button"
            onClick={() => setIsMuted((m) => !m)}
            aria-label={isMuted ? "Unmute site" : "Mute site"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
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
