import React, { useState } from "react";
import "./level.css";
import Level1 from "./level1";
import Level2 from "./level2";
import Level3 from "./level3";
import Level4 from "./level4";
import Level5 from "./level5";
import Level6 from "./level6";
import Level7 from "./level7";
import { useNavigate } from "react-router-dom";

const LevelSkeleton = () => {
    let session = sessionStorage.getItem("session");
    if (!session) {
        session = 1;
        sessionStorage.setItem("session", 1);
    }

    const [levelId, setLevelId] = useState(parseInt(session));
    const navigator = useNavigate();
    const renderGreetingContent = () => {
        switch (levelId) {
            case 2:
                return <Level2 setLevelId={setLevelId} />;
            case 3:
                return <Level3 setLevelId={setLevelId} />;
            case 4:
                return <Level4 setLevelId={setLevelId} />;
            case 5:
                return <Level5 setLevelId={setLevelId} />;
            case 6:
                return <Level6 setLevelId={setLevelId} />;
            case 7:
                return <Level7 setLevelId={setLevelId} />;
            case 8:
                return navigator("/final");
            default:
                return <Level1 setLevelId={setLevelId} />;
        }
    };

    return <div className="min-h-screen p-5 flex flex-col items-center bg-gray-100 gap-6 w-full levelWrapper">{renderGreetingContent()}</div>;
};

export default LevelSkeleton;
