import { strings } from "@/lib/strings";
import Logo from "@/assets/logo.png";
import LogoPurple from "@/assets/logo-purple.png";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatedLinkText, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = { id: string; label: string; to?: string; href?: string };

export const Navigation = () => {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
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
        console.log("Nothing")
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

  useEffect(() => {
    // Prevent background scrolling when the drawer is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isHome && !useLightTheme && "md:pt-2",
        navTheme.navBg,
      )}
    >
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="link"
            size="icon"
            className={cn(
              "md:hidden p-0 h-10 w-10",
              navTheme.link,
            )}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <Link to="/" onClick={closeMenu}>
            <img
              src={useLightTheme ? LogoPurple : Logo}
              alt={strings.nav.logo}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const targetPath = "to" in item ? item.to : item.href;
              const isActive = targetPath ? location.pathname.startsWith(targetPath) : false;
              const baseColor = navTheme.link;
              const baseLinkClasses = cn(
                "font-title uppercase text-xl transition-colors",
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

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-200",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-xs bg-white text-foreground shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            isMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
              <img src={LogoPurple} alt={strings.nav.logo} className="h-10 w-auto object-contain" />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-transparent hover:border-gray-300"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {navLinks.map((item) => {
              const baseLinkClasses = "block font-title text-xl uppercase text-foreground hover:text-primary transition-colors";
              return (
                <li key={item.id}>
                  {"to" in item ? (
                    <Link to={item.to} className={baseLinkClasses} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={baseLinkClasses} onClick={closeMenu}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
