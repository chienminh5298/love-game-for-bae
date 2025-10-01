import React, { Fragment, useState } from "react";
import useTypewriter from "../hook/typewritter";
import "./level.css";
import level7 from "../media/gif/level7.gif";
const Level7 = ({ setLevelId }) => {
    sessionStorage.setItem("session", 7);

    const { text, finished } = useTypewriter(`It's the slot machine lucky number!!!`, { speed: 50, startDelay: 500 });

    const [showHint, setShowHint] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim().toLowerCase() === "mai anh xinh dep") {
            alert("Hurayyyyyyyy. Chúc mừng bby đã vượt qua hết tất cả level.");
            setLevelId(8);
        } else {
            alert("Đáp án chưa đúng, bby thử lại nhé!");
        }
    };
    return (
        <div className="w-1/2">
            <div className="question">
                <div className="text-3xl font-bold flex">
                    Level 7<p className="hiddenText">77: mai anh xinh dep</p>
                </div>
                <div className="mt-5 p-2 rounded-md questionBox">{text}</div>
            </div>

            {finished && (
                <Fragment>
                    <div className="additionalInfo mt-5">
                        <img src={level7} alt="level1" className="w-1/2 rounded-xl" />
                    </div>
                    <div className="hint mt-5">
                        <div className="hintButton p-2 rounded-sm" onClick={() => setShowHint(!showHint)}>
                            Hint ở đây nè bae.
                        </div>
                        {showHint && (
                            <Fragment>
                                <h1 className="text-bold">Đáp án ở chính ngay đầu nơi e đang đứng.</h1>
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

export default Level7;
