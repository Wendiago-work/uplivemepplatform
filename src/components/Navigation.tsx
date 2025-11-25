import { strings } from "@/lib/strings";
import Logo from "@/assets/logo.png";
import LogoPurple from "@/assets/logo-purple.png";
import { Volume2, VolumeX } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatedLinkText, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = { id: string; label: string; to?: string; href?: string };

export const Navigation = () => {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navLinks: ReadonlyArray<NavLink> = strings.nav.links;
  const lightThemeRoutes = strings.nav.lightThemeRoutes ?? [];
  const pathname = location.pathname || "/";
  const isHome = pathname === "/";
  const isLightRoute = lightThemeRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
  const useLightTheme = hasScrolled || isLightRoute;

  const navTheme = useLightTheme
    ? {
        navBg: "bg-white text-foreground",
        link: "text-foreground",
        volumeButton: "text-foreground",
      }
    : {
        navBg: "bg-transparent text-white",
        link: "text-white",
        volumeButton: "text-white",
      };

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isHome && !useLightTheme && "pt-2",
        navTheme.navBg,
      )}
    >
      <div className="container py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={useLightTheme ? LogoPurple : Logo}
            alt={strings.nav.logo}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const targetPath = "to" in item ? item.to : item.href;
              const isActive = targetPath ? location.pathname.startsWith(targetPath) : false;
              const baseColor = navTheme.link;
              const baseLinkClasses = cn(
                "font-title uppercase text-lg transition-colors",
                baseColor,
                isActive && "text-primary",
              );

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
            <Button
              variant="link"
              size="icon"
              onClick={() => setIsMuted((m) => !m)}
              aria-label={isMuted ? "Unmute site" : "Mute site"}
              className={cn(
                "rounded-full transition-all duration-200 [&_svg]:!w-6 [&_svg]:!h-6 bg-none",
                navTheme.volumeButton,
              )}
            >
              {isMuted ? (
                <VolumeX aria-hidden="true" />
              ) : (
                <Volume2 aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
