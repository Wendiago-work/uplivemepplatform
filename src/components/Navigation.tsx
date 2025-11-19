import { strings } from "@/lib/strings";
import Logo from "@/assets/logo.png";
import { Volume2, VolumeX } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatedLinkText } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsMuted(true);
  }, [location.pathname]);

  useEffect(() => {
    const volumeValue = isMuted ? 0 : 1;
    const message = JSON.stringify({ method: "setVolume", value: volumeValue });

    document
      .querySelectorAll<HTMLMediaElement>("video, audio")
      .forEach((el) => {
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
    document
      .querySelectorAll<HTMLMediaElement>("video, audio")
      .forEach((el) => {
        el.muted = isMuted;
        if (!isMuted) el.volume = 1;
      });
    document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((frame) => {
      try {
        frame.contentWindow?.postMessage(message, "*");
      } catch (_err) {}
    });
  }, [location.pathname, isMuted]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 pt-2 transition-colors duration-300 ${
        hasScrolled ? "bg-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto py-4 px-4 lg:px-6 2xl:px-0 flex items-center justify-between">
        <Link to="/">
          <img
            src={Logo}
            alt={strings.nav.logo}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center gap-8">
            {strings.nav.links.map((item) => {
              const baseLinkClasses = `${hasScrolled ? "text-gray-900" : "text-white"} font-bold text-xl`;

              return (
                <li key={item.id}>
                  {"to" in item ? (
                    <Link to={item.to} className={baseLinkClasses}>
                      <AnimatedLinkText>{item.label}</AnimatedLinkText>
                    </Link>
                  ) : (
                    <a href={item.href} className={baseLinkClasses}>
                      <AnimatedLinkText>{item.label}</AnimatedLinkText>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsMuted((m) => !m)}
              aria-label={isMuted ? "Unmute site" : "Mute site"}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-all"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Volume2 className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
