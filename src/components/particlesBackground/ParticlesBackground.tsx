import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1b1621",
        },
        particles: {
          color: { value: "#9d4edd" },
          move: { enable: true, speed: 0.5 },
          number: { value: 15 },
          opacity: { value: 0.2 },
          shape: {
            type: "star"
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.2
            }
          }
        }
      }}
    />
  );
};