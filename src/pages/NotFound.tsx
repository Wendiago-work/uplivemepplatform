import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted px-6">
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-10 text-center shadow-lg">
        <h1 className="mb-3 text-6xl font-bold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
