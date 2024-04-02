import data from '/src/data.json';
import { useState} from "react";

export default function Container() {
    const [countLeft, setCountLeft] = useState(0);
    const [countRight, setCountRight] = useState(0);
    const [randomImageUrl, setRandomImageUrl] = useState("");

    function handleLeftClick() { setCountLeft(countLeft + 1) }
    function handleRightClick() { setCountRight(countRight + 1) }

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * data[0].length);
        setRandomImageUrl()
    }

    return(
        <>
            <h1>Cat Match</h1>
            <div id="container">
                <div className="picture-left" onClick={handleLeftClick}>
                    <img
                        src={data[0].link}
                        alt={data[0].name}
                        className="img-left"
                    />
                    <p className="score-left">
                        Vote: <span>{countLeft}</span>
                    </p>
                </div>

                <div className="picture-right" onClick={handleRightClick}>
                    <img
                        src={data[1].link}
                        alt={data[1].name}
                        className="img-right"
                    />
                    <p className="score-right">
                        Vote: <span>{countRight}</span>
                    </p>
                </div>
            </div>
        </>
    )
}