import React, { useState } from "react";
import "./greeting.css";
import { useNavigate } from "react-router-dom";
import Final from "./final";
import Final2 from "./final2";
import Final3 from "./final3";

const GreetingSkeleton = () => {
    const [finalId, setFinalId] = useState(1);
    const navigator = useNavigate();

    const renderGreetingContent = () => {
        switch (finalId) {
            case 2:
                return <Final2 setFinalId={setFinalId} />;
            case 3:
                return <Final3 setFinalId={setFinalId} />;
            default:
                return <Final setFinalId={setFinalId} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 w-full greetingWrapper">
            <div className="flex flex-col items-center justify-center p-15 rounded-xl greetingBoxWrapper w-3/4 relative">{renderGreetingContent()}</div>
        </div>
    );
};

export default GreetingSkeleton;
