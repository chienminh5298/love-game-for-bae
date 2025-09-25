import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Greeting = ({ setGreetingId }) => {
    const { text, finished } = useTypewriter("Muahaha, GAME FOR BAE season 2 đã quay trở lại và lợi hại hơn xưa với độ khó tăng x1000 lần giống như tình iu anh dành cho công chúa của anh vậy đó !!!", { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        setGreetingId(2);
    };
    return (
        <Fragment>
            <div>{text}</div>
            {finished && (
                <button onClick={handleClickButton} className="absolute greetingNextButton px-5 py-1 rounded-sm">
                    Next
                </button>
            )}
        </Fragment>
    );
};

export default Greeting;
