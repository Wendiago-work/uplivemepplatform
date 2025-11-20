import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder colored boxes representing game screenshots
const imageColors = [
  "#E91E63", // Pink/Magenta
  "#F44336", // Red
  "#FF9800", // Orange/Yellow
  "#4CAF50", // Green
  "#2196F3", // Blue
];

interface RotatingBoxProps {
  position: [number, number, number];
  color: string;
  index: number;
}

const RotatingBox = ({ position, color, index }: RotatingBoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate all boxes
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.1;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      
      {/* Add number on the front face */}
      <mesh position={[0, 0, 1.01]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial color="white" transparent opacity={0.9} />
      </mesh>
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Rotating Boxes */}
      {imageColors.map((color, index) => {
        const angle = (index / imageColors.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <RotatingBox
            key={index}
            position={[x, 0, z]}
            color={color}
            index={index}
          />
        );
      })}
    </>
  );
};

export const AboutUsHero = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Canvas */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Canvas shadows>
              <Scene />
            </Canvas>
          </div>

          {/* Right: Content */}
          <div className="flex gap-6 md:gap-8">
            {/* Vertical "ABOUT US" text */}
            <div className="flex items-center">
              <span className="text-primary text-sm md:text-base font-bold tracking-widest whitespace-nowrap origin-center -rotate-90 translate-y-12">
                ABOUT US
              </span>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                YOUR TRUSTED GAME DEVELOPMENT PARTNER
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                We're a <span className="font-bold text-gray-900">global game development</span> partner that empowers
                developers and publishers of all sizes. No matter the technical
                request, creative demand, or impending deadline, our team of
                technical and artistic experts are here to help.
              </p>
              <Button asChild size="lg" className="font-bold">
                <Link to="/careers">JOIN THE TEAM</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
