import React, { Fragment, useState } from "react";
import "./level.css";
import { useNavigate } from "react-router-dom";
import Level1 from "./level1";
import Level2 from "./level2";
import Level3 from "./level3";
import Level4 from "./level4";

const LevelSkeleton = () => {
    const [levelId, setLevelId] = useState(4);
    const navigator = useNavigate();

    const renderGreetingContent = () => {
        switch (levelId) {
            case 2:
            return <Level2 setLevelId={setLevelId} />;
            case 3:
                return <Level3 setLevelId={setLevelId} />;
            case 4:
                return <Level4 setLevelId={setLevelId} />;
            default:
                return <Level1 setLevelId={setLevelId} />;
        }
    };

    return <div className="min-h-screen p-5 flex flex-col items-center bg-gray-100 gap-6 w-full levelWrapper">{renderGreetingContent()}</div>;
};

export default LevelSkeleton;
