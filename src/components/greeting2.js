import "./greeting.css";
import useTypewriter from "../hook/typewritter";
import { Fragment } from "react/jsx-runtime";

const Greeting2 = ({ setGreetingId }) => {
    const { text, finished } = useTypewriter("Ở season kì này bby sẽ được trải qua nhiều vòng chơi li kì, hấp dẫn cùng với sự trợ giúp (hint) trị giá 20$/lần. Bby cần vượt qua 7 levels để đạt được giải thưởng trị giá 10 nụ hôn to bự của chồng. ARE YOU READYYYYY !!!", { speed: 50, startDelay: 500 });

    const handleClickButton = () => {
        setGreetingId(3);
    };
    return (
        <Fragment>
            <div className="text-center">{text}</div>
            {finished && (
                <button onClick={handleClickButton} className="absolute greetingNextButton px-5 py-1 rounded-sm">
                    ❤️ Gẹt gô gô !!!
                </button>
            )}
        </Fragment>
    );
};

export default Greeting2;
