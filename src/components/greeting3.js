import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Greeting3 = ({ setGreetingId }) => {
    const { text, finished } = useTypewriter("Trước khi vào trò chơi chính thức, hãy cùng tham gia 1 game nho nhỏ để warm up nào. Are you ready ???", { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        setGreetingId(3);
    };
    return (
        <Fragment>
            <div className="text-center">{text}</div>
            {finished && (
                <button onClick={handleClickButton} className="absolute greetingNextButton px-5 py-1 rounded-sm">
                    Gẹt gô !!!
                </button>
            )}
        </Fragment>
    );
};

export default Greeting3;
