import data from "../../data/data.json";

const useShuffle = (callback, i, j) => callback([data.cats[i], data.cats[j]]);


export default useShuffle;