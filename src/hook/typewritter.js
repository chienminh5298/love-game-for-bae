import { useEffect, useRef, useState } from "react";

export default function useTypewriter(
  input,
  {
    speed = 40,
    startDelay = 0,
    loop = false,
    pauseMap = { ",": 120, ".": 220, "!": 220, "?": 220, "\n": 150 },
  } = {}
) {
  const [text, setText] = useState("");
  const [finished, setFinished] = useState(false);
  const iRef = useRef(0);
  const stopRef = useRef(false);

  useEffect(() => {
    stopRef.current = false;
    setText("");
    setFinished(false);
    iRef.current = 0;

    let timer;
    const tick = () => {
      if (stopRef.current) return;
      const i = iRef.current;

      if (i < input.length) {
        setText(input.slice(0, i + 1));
        const ch = input[i];
        iRef.current = i + 1;
        timer = setTimeout(tick, speed + (pauseMap[ch] || 0));
      } else {
        setFinished(true);
        if (loop) {
          timer = setTimeout(() => {
            setText("");
            setFinished(false);
            iRef.current = 0;
            tick();
          }, 600);
        }
      }
    };

    const starter = setTimeout(tick, startDelay);

    return () => {
      stopRef.current = true;
      clearTimeout(starter);
      clearTimeout(timer);
    };
  }, [input, speed, startDelay, loop]);

  return { text, finished };
}
