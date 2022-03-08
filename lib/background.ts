const C1 = 191;
const C2 = 64;

type ColorOptions = { x: number; y: number; r: number; g: number; b: number };

export const color = function (
  context: CanvasRenderingContext2D,
  { x, y, r, g, b }: ColorOptions
) {
  context.fillStyle = `rgb(${r}, ${g}, ${b})`;
  context.fillRect(x, y, 1, 1);
};

export const R = function (x: number, y: number, time: number) {
  return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
};

export const G = function (x: number, y: number, time: number) {
  return Math.floor(
    C1 +
      C2 *
        Math.sin(
          (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
        )
  );
};

export const B = function (x: number, y: number, time: number) {
  return Math.floor(
    C1 +
      C2 *
        Math.sin(
          5 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};
