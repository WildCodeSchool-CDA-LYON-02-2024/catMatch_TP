import './CatComponent.css'
import propTypes from 'prop-types'



function CatComponent({name,img,score,id,onclick}) {

   const clickHandler = () => {
    onclick(id)
   }


    return (

        <div className="card">
        <div  onClick={clickHandler} className = "cat">
            <h1>test</h1>

            <img src ={img}/>
            <span>{name}</span>
            
          </div>
          
    <div>
        score:{score}
    </div>
        
    </div>
    )
   
}
CatComponent.prototype = {
    name :propTypes .string,
    img  : propTypes.string,
    score : propTypes.number,
    id  : propTypes.number,
    onClick : propTypes.func


}

export default CatComponent