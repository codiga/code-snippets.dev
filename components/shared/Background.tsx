import { Box, useColorModeValue } from "@chakra-ui/react";
import { B, color, G, R } from "lib/background";
import { useEffect, useRef } from "react";

type BackgroundProps = {
  speed?: number;
};

const Background = ({ speed = 0.02 }: BackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bg = useColorModeValue("white", "#131126");

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        let time = 0;

        const startAnimation = function () {
          for (let x = 0; x <= 35; x++) {
            for (let y = 0; y <= 35; y++) {
              color(ctx, {
                x,
                y,
                r: R(x, y, time),
                g: G(x, y, time),
                b: B(x, y, time),
              });
            }
          }

          time = time + speed;

          window.requestAnimationFrame(startAnimation);
        };

        startAnimation();
      }
    }
  }, [speed]);

  return (
    <>
      <canvas id="background" ref={canvasRef} width="32px" height="32px" />
      <Box
        w={{ base: "3000px", md: "5900px" }}
        h={{ base: "2900px", md: "5050px" }}
        pos="fixed"
        zIndex={-1}
        borderRadius="100%"
        boxShadow={{
          base: `inset 0px -190px 500px 1380px ${bg}`,
          md: `inset 0px -300px 1000px 2450px ${bg}`,
        }}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
    </>
  );
};

export default Background;
