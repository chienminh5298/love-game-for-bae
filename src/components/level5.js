import React, { Fragment, useState } from "react";
import useTypewriter from "../hook/typewritter";
import "./level.css";
import level5hint from "../media/gif/hintlv5.gif";

const Level5 = ({ setLevelId }) => {
    sessionStorage.setItem("session", 5);

    const { text, finished } = useTypewriter(`Baby của chồng chỉ cần trả lời đúng 1 trong 3 câu hỏi.`, { speed: 50, startDelay: 500 });

    const [showHint, setShowHint] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const [selectedQuestion, setSelectedQuestion] = useState("1");

    const handleSubmit = () => {
        if (inputValue.trim().toLowerCase() === "green" && selectedQuestion === 2) {
            alert("Chúc mừng bby đã vượt qua level 5. Cùng chồng qua level tiếp theo nhé!");
            setLevelId(6);
        } else {
            alert("Đáp án chưa đúng, bby thử lại nhé!");
        }
    };
    return (
        <div className="w-1/2">
            <div className="question">
                <h1 className="text-3xl font-bold">Level 5</h1>
                <div className="mt-5 p-2 rounded-md questionBox">{text}</div>
            </div>

            {finished && (
                <Fragment>
                    <div className="additionalInfo mt-5">
                        <label className="block mb-2 font-medium">Chọn câu hỏi:</label>
                        <select value={selectedQuestion} onChange={(e) => setSelectedQuestion(parseInt(e.target.value))} className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-blue-300 outline-none transition duration-200 shadow-sm selectLevel5">
                            <option value={1}>What's your mother's sister's son's nephew's neighbour name?</option>
                            <option value={2}>What's Mun favourite color?</option>
                            <option value={3}>What's Mun's brother current address?</option>
                        </select>
                    </div>
                    <div className="hint mt-5">
                        <div className="hintButton p-2 rounded-sm" onClick={() => setShowHint(!showHint)}>
                            Hint ở đây nè bae.
                        </div>
                        {showHint && (
                            <Fragment>
                                <h1 className="text-bold">Đoán xem hihi</h1>
                                <img src={level5hint} alt="level1" className="w-1/2 rounded-xl" />
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

export default Level5;
