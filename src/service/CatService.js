import dataCats from '../data/data.json';

class Cat {
  data = null;
  constructor() {
    this.data = dataCats.map((el, index) => {
      return { ...el, score: 0, id: index };
    });
  }

  getRandomCat() {
    const index = Math.floor(Math.random() * this.data.length);

    return this.data[index];
  }

  getRandomCats(cat = null) {
    const cats = [null, null];
    cats[0] = cat === null ? this.getRandomCat() : cat;
    cats[1] = this.getRandomCat();
    if (cats[0].id === cats[1].id) {
      return this.getRandomCats(cats[0]);
    }
    return cats;
  }

  addScore(id) {
    this.data.map((cat) =>
      cat.id === id ? { ...cat, score: cat.score++ } : cat
    );
  }

  topResult() {
    let tab = this.data.map((el) => {
      return { name: el.name, score: el.score };
    });
    return tab.sort((a, b) => b.score - a.score);
  }
}

export default Cat;
