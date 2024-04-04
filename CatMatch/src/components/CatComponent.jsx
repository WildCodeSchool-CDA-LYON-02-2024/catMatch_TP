import './CatComponent.css'



function CatComponent({name,img,score,id,onClick}) {

   const clickHandler = () => {
    onclick(id)
   }


    return (

        <>
        <div  onClick={clickHandler} className = "cat">
            <h1>test</h1>

            <img src ={img}/>
            <span>{name}</span>
            
          </div>
          
    <div>
    score: <span>{score}</span>
    </div>
        
    </>
    )
   
}

export default CatComponent