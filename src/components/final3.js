import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Final3 = ({ setFinalId }) => {
    const { text, finished } = useTypewriter("Đây sẽ là thử thách cuối cùng để nhận phần thưởng cho người xứng đáng. Hãy đứng trước mặt chồng mình và làm theo clip hướng dẫn để nhận quà nhé =))))", { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        setFinalId(3);
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

export default Final3;
