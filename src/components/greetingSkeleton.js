import React, { useEffect, useState } from "react";
import Greeting from "./greeting";
import "./greeting.css";
import Greeting2 from "./greeting2";
import { useNavigate } from "react-router-dom";
import hello1 from "../media/img/hello1.png";
import hello2 from "../media/img/hello2.png";

const GreetingSkeleton = () => {
    const [greetingId, setGreetingId] = useState(1);
    const navigator = useNavigate();
    const [helloImage, setHelloImage] = useState(hello1);

    useEffect(() => {
        if (greetingId === 2) {
            setHelloImage(hello2);
        } else {
            setHelloImage(hello1);
        }
    }, [greetingId]);

    const renderGreetingContent = () => {
        switch (greetingId) {
            case 2:
                return <Greeting2 setGreetingId={setGreetingId} />;
            case 3:
                return navigator("/level");
            default:
                return <Greeting setGreetingId={setGreetingId} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 w-full greetingWrapper">
            <div className="flex flex-col items-center justify-center p-15 rounded-xl greetingBoxWrapper w-3/4 relative">
                <img className="helloImg" src={helloImage} alt="" />
                {renderGreetingContent()}
            </div>
        </div>
    );
};

export default GreetingSkeleton;
