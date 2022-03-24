import { useEffect, useState } from "react";

const TYPING_SPEED = 100;
const QUERY_SPEED = 2000;

const queries = [
  "javascript react component",
  "java read file",
  "python read file",
];

export default function useSearchAnimation() {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const loop = (index = 0, current = 0) => {
      setPlaceholder(queries[current].slice(0, index));

      if (queries[current].length === index) {
        if (current === queries.length - 1) {
          setTimeout(() => loop(), QUERY_SPEED);
        } else {
          setTimeout(() => loop(0, current + 1), QUERY_SPEED);
        }
      } else {
        setTimeout(() => loop(index + 1, current), TYPING_SPEED);
      }
    };

    loop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return placeholder;
}
