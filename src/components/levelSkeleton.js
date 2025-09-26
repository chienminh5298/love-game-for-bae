import React, { Fragment, useState } from "react";
import "./level.css";
import { useNavigate } from "react-router-dom";
import Level1 from "./level1";
import Level2 from "./level2";

const LevelSkeleton = () => {
    const [levelId, setLevelId] = useState(2);
    const navigator = useNavigate();

    const renderGreetingContent = () => {
        switch (levelId) {
            case 2:
            return <Level2 setLevelId={setLevelId} />;
            case 3:
                return navigator("level");
            default:
                return <Level1 setLevelId={setLevelId} />;
        }
    };

    return <div className="min-h-screen p-5 flex flex-col items-center bg-gray-100 gap-6 w-full levelWrapper">{renderGreetingContent()}</div>;
};

export default LevelSkeleton;
