import React from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcomeWrapper min-h-screen w-full flex relative">
            <div className="black pointer-events-none absolute inset-0 z-20 bg-black" />

            {/* LỖ (thẻ riêng) — bạn có thể ẩn/hiện vòng sáng này tuỳ ý */}
            <div className="lighter rounded-full" />
            <div className="flex flex-col items-center gap-4 welcomeText">
                <h1 className="font-bold text-3xl">GAME FOR BAE</h1>
                <h1 className="font-bold text-2xl">Game dành cho người thông minh đáng yêu siu cấp vũ trụ -`♡´-</h1>
            </div>
            <button
                className="welcomeNext px-5 py-1 rounded-sm"
                onClick={() => {
                    navigate("/greeting");
                }}
            >
                ❤️ Next
            </button>
        </div>
    );
};

export default Welcome;
