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
    getRandomCat() {
        const index = Math.floor(Math.random() * this.data.length);
        return this.data[index];
    }
    
    getCats() {
        const cats = [null, null];
        cats[0] = this.getRandomCat();
        cats[1] = this.getRandomCat();
        if(cats[0].id=== cats[1].id){
            return this.getCats(cats[0])
        }
        
    
        return cats;
    }
    
    


}
export default CatService