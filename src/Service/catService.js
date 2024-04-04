import catData from "../assets/data";

class CatService {
  data = null;
  constructor() {
    this.data = catData.map((cat, index) => ({
      ...cat,
      id: index,
      score: 0,
    }));
  }
  getRandom() {
    const index = Math.floor(Math.random() * this.data.length);
    return this.data[index];
  }
  getTwoCats(cat = null) {
    const cats = [null, null];
    cats[0] = cat === null ? this.getRandom() : cat;
    cats[1] = this.getRandom();
    if (cats[0].id === cats[1].id) {
      return this.getTwoCats(cats[0]);
    }
    return cats;
  }
  addScore(id) {
    this.data = this.data.map((cat) =>
      cat.id === id ? { ...cat, score: cat.score + 1 } : cat
    );
    localStorage.setItem("cat", JSON.stringify(this.data));
  }
}

export default CatService;

// getTwoCats() {
//   const Index = Math.floor(Math.random() * this.data.length);
//   const cat1 = this.data[Index];
//   let cat2Index = Index;
//   while (cat2Index === Index) {
//     cat2Index = Math.floor(Math.random() * this.data.length);
//   }
//   const cat2 = this.data[cat2Index];
//   return [cat1, cat2];
// }

// Service.map((cat, ) => {
//   if (cat.id === id) {
//     return { ...cat, score: cat.score + 1 };
//   }
//   return cat;
// });
