import React from "react";
import { loadFull } from "tsparticles"; // Import full tsparticles engine
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Load the tsparticles engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#282c34" }, // Background color
        },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" }, // Particle color
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
