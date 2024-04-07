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
    
    getRandomCats() {
        const cats = [null, null];
        cats[0] = this.getRandomCat();
        cats[1] = this.getRandomCat();
        if(cats[0].id=== cats[1].id){
            return this. getRandomCats(cats[0])
        }
        
    
        return cats;
    }
    
    addScore(id) {
       this .data = this.data.map(cat => cat.id === id?{...cat,score:cat.score+1}: cat)
      
    }


}
export default CatService