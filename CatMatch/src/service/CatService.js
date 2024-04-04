import dataJson from '../assets/data.json'



class CatService {




    data = null ;

    constructor() {
        this. data = dataJson.map((cat,index) => {
    return {
            ...cat,
            id : index,
            score : 0,
            
        }  
    })

    }
    


}
export default CatService