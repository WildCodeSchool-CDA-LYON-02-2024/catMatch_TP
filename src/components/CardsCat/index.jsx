import {useEffect, useState} from "react";
import '../../assets/cardContainer.css';
import { CardComponent } from "../";
import { useShuffle } from "../../hooks";

const CardsCat = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        useShuffle(setCats, 0, 1);
    }, []);
    const handleChange = () => {
        let count = 0;
        let k = count !== 0 ? count + 1 : 1;
        let l = count !== 0 ? count + 2 : 2;
        if(count === 4)
            count = 0;
        useShuffle(setCats, k, l);
        count += 1;
    };
    return (
        <div className="cards-container">
            {
                cats.map(cat => (<CardComponent key={ cat.id } {...cat} />))
            }
            <button onClick={handleChange}>Change card</button>
        </div>
    );
}

export default CardsCat;