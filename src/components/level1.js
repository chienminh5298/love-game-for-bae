import React, { Fragment, useState } from "react";
import useTypewriter from "../hook/typewritter";
import level1Image from "../media/img/level1.png";
import hint1 from "../media/gif/hint1lv1.gif";
import hint2 from "../media/gif/hint2lv1.gif";
import "./level.css";

const Level1 = ({ setLevelId }) => {
    const { text, finished } = useTypewriter(
        `Hãy giải mã nội dung được mã hoá "YRHYCOAEYAPPAEUMPL". Gợi ý của bby như sau: Âm thanh không đi thẳng,
mà uốn lượn lên xuống.
Khi viết đúng theo nhịp,
giai điệu tim sẽ vang.`,
        { speed: 50, startDelay: 500 }
    );

    const [showHint, setShowHint] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim().toLowerCase() === "you are my happy place") {
            alert("Chúc mừng bby đã vượt qua level 1. Cùng chồng qua level tiếp theo nhé!");
            setLevelId(2);
        } else {
            alert("Đáp án chưa đúng, bby thử lại nhé!");
        }
    };
    return (
        <div className="w-1/2">
            <div className="question">
                <h1 className="text-3xl font-bold">Level 1</h1>
                <div className="mt-5 p-2 rounded-md questionBox">{text}</div>
            </div>

            {true && (
                <Fragment>
                    <div className="additionalInfo mt-5">
                        <img src={level1Image} alt="level1" className="w-1/2 rounded-xl" />
                    </div>
                    <div className="hint mt-5">
                        <div className="hintButton p-2 rounded-sm" onClick={() => setShowHint(!showHint)}>
                            Hint ở đây nè bae.
                        </div>
                        {showHint && (
                            <Fragment>
                                <img src={hint1} alt="hint1" className="w-1/2 rounded-xl my-2" />
                                <img src={hint2} alt="hint1" className="w-1/2 rounded-xl" />
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

export default Level1;
