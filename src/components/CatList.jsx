// import { useState } from "react";
import "./CatList.css";

export default function CatList({name, img, score, id, onClick}) {

const HandleCat = ()=>{
  onClick(id)
}

  return (
    <div>
      <div onClick={HandleCat}>
        <img src={img}/>
        <span>{name}</span>
      </div>

      <div>
        Score : <span>{score}</span>
      </div>
    </div>
  );
}
