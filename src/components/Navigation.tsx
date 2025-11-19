import { strings } from "@/lib/strings";
import Logo from "@/assets/logo.png";
import { Volume2, VolumeX } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(true);
  }, [location.pathname]);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1400px] mx-auto py-4 px-4 lg:px-6 2xl:px-0 flex items-center justify-between">
        <Link to="/">
          <img
            src={Logo}
            alt={strings.nav.logo}
            className="h-10 w-auto object-contain"
          />
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {strings.nav.links.map((item) => {
            const linkClasses = `font-medium text-base text-gray-700 hover:text-primary transition-colors`;

            return (
              <li key={item.id}>
                {"to" in item ? (
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
    </nav>
  );
};
