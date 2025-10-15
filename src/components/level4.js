import React, { Fragment, useState } from "react";
import useTypewriter from "../hook/typewritter";
import "./level.css";
import level4img from "../media/img/level4.png";

const Level4 = ({ setLevelId }) => {
    localStorage.setItem("session", 4);

    const { text, finished } = useTypewriter(`Đáp án này không ở trong máy. Nó nằm giữa da và giấy, nơi mỗi ngày đều nghe tiếng kim loại khẽ leng keng. Muốn gọi nó dậy, hãy tìm kị sĩ cầm gậy phi nước đại trong im lặng. Khi thấy hai chữ cái quen quen của người Pháp. Để gọi nó ra hãy nhìn thẳng vào 2 hạt nhãn long lanh và nói "Hô hô hô, khẹc khẹc khẹc"`, { speed: 50, startDelay: 500 });

    const [showHint, setShowHint] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim().toLowerCase() === "you are my little world") {
            alert("Chúc mừng bby đã vượt qua level 4. Cùng chồng qua level tiếp theo nhé!");
            setLevelId(5);
        } else {
            alert("Đáp án chưa đúng, bby thử lại nhé!");
        }
    };
    return (
        <div className="w-1/2">
            <div className="question">
                <h1 className="text-3xl font-bold">Level 4</h1>
                <div className="mt-5 p-2 rounded-md questionBox">{text}</div>
            </div>

            {finished && (
                <Fragment>
                    <div className="additionalInfo mt-5">
                        <img src={level4img} alt="level1" className="w-1/2 rounded-xl" />
                    </div>
                    <div className="hint mt-5">
                        <div className="hintButton p-2 rounded-sm" onClick={() => setShowHint(!showHint)}>
                            Hint ở đây nè bae.
                        </div>
                        {showHint && (
                            <Fragment>
                                <h1 className="text-bold">Vòng này không có hint đây liu liuuuuu</h1>
                            </Fragment>
                        )}
                    </div>
                    <div className="answerBox mt-6">
                        <input onChange={handleInputChange} type="text" placeholder="Nhập đáp án..." className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none transition duration-200 shadow-sm" />
                        <button onClick={handleSubmit} className="answerButton mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200">
                            Gửi đáp án
                        </button>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Level4;
