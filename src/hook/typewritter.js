import { useEffect, useRef, useState } from "react";
import textSound1 from "../media/sound/text1.mp3";
import textSound2 from "../media/sound/text2.mp3";
import { getRandomNumber } from "../utils";
export default function useTypewriter(input, { speed = 40, startDelay = 0, loop = false, pauseMap = { ",": 120, ".": 220, "!": 220, "?": 220, "\n": 150 } } = {}) {
    const [text, setText] = useState("");
    const [finished, setFinished] = useState(false);
    const iRef = useRef(0);
    const stopRef = useRef(false);
    const soundRef = useRef(null);

    // init sound 1 lần
    useEffect(() => {
        soundRef.current = new Audio(getRandomNumber() % 2 === 0 ? textSound1 : textSound2);
        soundRef.current.loop = true; // lặp liên tục cho đến khi stop
        soundRef.current.volume = 0.5; // chỉnh âm lượng nếu cần
        return () => {
            soundRef.current?.pause();
            soundRef.current = null;
        };
    }, []);

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
                // stop sound khi gõ xong
                soundRef.current?.pause();
                soundRef.current.currentTime = 0;

                if (loop) {
                    timer = setTimeout(() => {
                        setText("");
                        setFinished(false);
                        iRef.current = 0;
                        // play lại khi lặp
                        soundRef.current?.play().catch(() => {});
                        tick();
                    }, 600);
                }
            }
        };

        const starter = setTimeout(() => {
            // bắt đầu play sound khi text bắt đầu gõ
            soundRef.current?.play().catch(() => {});
            tick();
        }, startDelay);

        return () => {
            stopRef.current = true;
            clearTimeout(starter);
            clearTimeout(timer);
            if (soundRef.current) {
                soundRef.current.pause();
                soundRef.current.currentTime = 0;
            }
        };
    }, [input, speed, startDelay, loop]);

    return { text, finished };
}
