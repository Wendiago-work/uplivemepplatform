import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const mascotUrl = "https://res.cloudinary.com/dsmn3rwyp/image/upload/v1763658709/mascot_g8fjof.png";

  return (
    <PageLayout
      mainClassName="flex items-center justify-center mt-20"
    >
      <div className="container relative z-10 flex flex-col items-center text-center pt-16">

        {/* Floating Mascots */}
        <motion.img
          src={mascotUrl}
          alt="Floating Mascot"
          className="z-[-1] absolute top-12 left-[8%] md:left-[12%] w-24 md:w-32 h-auto object-contain drop-shadow-lg hidden md:block"
          animate={{ y: [-10, 6, -10], rotate: [-8, 8, -8] }} // keep float small so it stays inside container
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src={mascotUrl}
          alt="Floating Mascot"
          className="z-[-1] absolute top-1/3 right-[10%] w-20 md:w-28 h-auto object-contain drop-shadow-lg hidden md:block"
          animate={{ y: [-6, 10, -6], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title as="h1" className="text-[10rem] md:text-[14rem] text-[#FF3B3B] leading-none select-none">
            404
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <Title as="h2" className="uppercase" align="center">
            Page Not Found
          </Title>

          <p className="text-lg max-w-md mx-auto">
            We're not being able to find the page you're looking for
          </p>

          <div className="pt-4">
            <Button
              variant="tech"
              size="lg"
              className="font-bold uppercase tracking-wide px-8 py-6 text-base"
              onClick={() => navigate("/")}
            >
              Back to Homepage
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
