const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //getter functions
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  get appetizers() {
    return this.appetizers;
  },
  get mains() {
    return this.mains;
  },
  get desserts() {
    return this.desserts;
  },
  // setter functions
  set appetizers(appetizerName) {
    this.appetizers = appetizerName;
  },
  set mains(mainName) {
    this.mains = mainName;
  },
  set desserts(dessertName) {
    this.desserts = dessertName;
  },
  // object methods
  addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    // retrieve the given course
    let dishes = this._courses[courseName];
    // generate random index up to the length -1 of the array
    let randomIndex = dishes.length * Math.random();
    // round the generated number to a whole number
    let roundedIndex = Math.floor(randomIndex);
    // return the dish at roundedIndex location in dishes array
      return dishes[roundedIndex];
  },
   generateRandomMeal() {
     // create random meal by getting random dish from appetizer, mains & desserts
     let randomAppetizer = this.getRandomDishFromCourse('appetizers');
     let randomMain = this.getRandomDishFromCourse('mains');
     let randomDessert = this.getRandomDishFromCourse('desserts');

     // return each dish & total price of the meal
     let mealList = randomAppetizer.name + ', ' + randomMain.name + ', ' + randomDessert.name;
     let totalPrice = randomAppetizer.price + randomMain.price + randomDessert.price;
     let totalMeal = 'You ordered: ' + mealList + '. Price: ' + totalPrice;
     return totalMeal;
  },
};
// populate appetizers
menu.addDishToCourse('appetizers', 'French Fries', 1.99);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 2.50);
menu.addDishToCourse('appetizers', 'Onion Rings', 3.99);
// populate mains
menu.addDishToCourse('mains', 'Pizza', 4.50);
menu.addDishToCourse('mains', 'Burger', 5.99);
menu.addDishToCourse('mains', 'Nuggets', 5.00);
// populate desserts
menu.addDishToCourse('desserts', 'Ice Cream', 2.00);
menu.addDishToCourse('desserts', 'Cake', 2.50);
menu.addDishToCourse('desserts', 'Brownie', 1.50);

// generate meal with generateRandomMeal method
let meal = menu.generateRandomMeal();
console.log(meal);
