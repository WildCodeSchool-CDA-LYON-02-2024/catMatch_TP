// import { useState } from "react";
import "./CatList.css";

// eslint-disable-next-line react/prop-types
export default function CatList({name, img, score, id, onClick}) {

const HandleCat = ()=>{
  onClick(id)
}

  return (
    <div>
      <div onClick={HandleCat}>
        <img src={img}/>
        <p>{name}</p>
      </div>

      <div>
        Score : <span>{score}</span>
      </div>
    </div>
  );
}
