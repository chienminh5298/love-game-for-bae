import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Final = ({ setFinalId }) => {
    const { text, finished } = useTypewriter("Tuyệt vờiiii, quá là tuyệt vờiiii.", { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        setFinalId(2);
    };
    return (
        <Fragment>
            <div>{text}</div>
            {finished && (
                <button onClick={handleClickButton} className="absolute greetingNextButton px-5 py-1 rounded-sm">
                    ❤️ Next
                </button>
            )}
        </Fragment>
    );
};

export default Final;
