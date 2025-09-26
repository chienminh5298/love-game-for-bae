import React from "react";
import "./daothimun.css";
import useTypewriter from "../hook/typewritter";
import { useNavigate } from "react-router-dom";

const Daothimun = () => {
    const navigator = useNavigate();
    const { text, finished } = useTypewriter(`Trời trời xem người đẹp của ai mà giỏi quá kìa trời. Chúc mừng bby đã tìm ra nơi này. Đáp án của Level 2 chính là "Di an ramen thoi". Còn bây giờ, hãy cùng chồng qua level tiếp theo nhé 🧸`, { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        navigator("/level");
    };

    return (
        <div className="munWrapper min-h-screen p-5 flex flex-col justify-center items-center bg-gray-100 gap-6 w-full">
            <div className="flex flex-col items-center justify-center p-15 rounded-xl greetingBoxWrapper w-3/4 relative text-center">
                {text}
                {finished && (
                    <button onClick={handleClickButton} className="absolute greetingNextButton px-5 py-1 rounded-sm">
                        ❤️ Go back
                    </button>
                )}
            </div>
        </div>
    );
};

export default Daothimun;
