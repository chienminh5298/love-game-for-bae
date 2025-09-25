import React, { useState } from "react";
import Greeting from "./greeting";
import "./greeting.css";
import Greeting2 from "./greeting2";
import Greeting3 from "./greeting3";

const GreetingSkeleton = () => {
    const [greetingId, setGreetingId] = useState(1);

    const renderGreetingContent = () => {
        switch (greetingId) {
            case 2:
                return <Greeting2 setGreetingId={setGreetingId}/>;
            case 3:
                return <Greeting3 setGreetingId={setGreetingId}/>;
            default:
                return <Greeting setGreetingId={setGreetingId}/>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 w-full greetingWrapper">
            <div className="flex flex-col items-center justify-center p-15 rounded-xl greetingBoxWrapper w-3/4 relative">{renderGreetingContent()}</div>
        </div>
    );
};

export default GreetingSkeleton;
