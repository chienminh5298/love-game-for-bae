import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Final2 = ({ setFinalId }) => {
    const { text, finished } = useTypewriter("Chúc mừng người đẹp của anh đã xuất sắc vượt qua hết tất cả thử thách.", { speed: 50, startDelay: 500 });

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

export default Final2;
