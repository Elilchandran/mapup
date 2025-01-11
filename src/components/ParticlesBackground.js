import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 100 },
          color: { value: "#48CAE4" },
          shape: { type: "circle" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
      className="position-absolute w-100 h-100"
    />
  );
};

export default ParticlesBackground;
