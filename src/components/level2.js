import React, { Fragment, useState } from "react";
import useTypewriter from "../hook/typewritter";
import "./level.css";
import mun from "../media/img/mun.png";
const Level2 = ({ setLevelId }) => {
    localStorage.setItem("session", 2);
    const { text, finished } = useTypewriter(`"Trình độ" không thể nào so sánh được với tình yêu thương của cha mẹ dành cho con cái. Nên bby hãy thay thế "Trình độ" bằng tên cúng cơm của con nhé.`, { speed: 50, startDelay: 500 });

    const [showHint, setShowHint] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim().toLowerCase() === "di an ramen thoi") {
            alert("Chúc mừng bby đã vượt qua level 2. Cùng chồng qua level tiếp theo nhé!");
            setLevelId(3);
        } else {
            alert("Đáp án chưa đúng, bby thử lại nhé!");
        }
    };
    return (
        <div className="w-1/2">
            <div className="question">
                <h1 className="text-3xl font-bold">Level 2</h1>
                <div className="mt-5 p-2 rounded-md questionBox">{text}</div>
            </div>

            {finished && (
                <Fragment>
                    <div className="hint mt-5">
                        <div className="hintButton p-2 rounded-sm" onClick={() => setShowHint(!showHint)}>
                            Hint ở đây nè bae.
                        </div>
                        {showHint && (
                            <Fragment>
                                <h1 className="text-bold">URL</h1>
                                <img src={mun} alt="hint1" className="w-1/2 rounded-xl my-2" />
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

export default Level2;
