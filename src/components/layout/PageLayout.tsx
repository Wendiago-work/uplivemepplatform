import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type PageLayoutProps = {
  children: ReactNode;
  /** Classes applied to the outer wrapper (behind nav/footer). */
  wrapperClassName?: string;
  /** Classes applied to the main element that wraps page content. */
  mainClassName?: string;
  /** Optional wrapper around the footer for per-page spacing. */
  footerClassName?: string;
};

export const PageLayout = ({
  children,
  wrapperClassName = "",
  mainClassName = "",
  footerClassName = "",
}: PageLayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${wrapperClassName}`}>
      <Navigation />
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
      <div className={footerClassName}>
        <Footer />
      </div>
    </div>
  );
};
