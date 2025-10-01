import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";
import finalVid from "../media/img/finalVid.mp4";

const Final3 = ({ setFinalId }) => {
    const { text, finished } = useTypewriter("Đây sẽ là thử thách cuối cùng để nhận phần thưởng cho người xứng đáng. Hãy đứng trước mặt chồng mình và làm theo clip hướng dẫn để nhận quà nhé =))))", { speed: 50, startDelay: 500 });

    return (
        <Fragment>
            <div>{text}</div>
            {finished && (
                <video width="600" controls className="mt-5">
                    <source src={finalVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </Fragment>
    );
};

export default Final3;
