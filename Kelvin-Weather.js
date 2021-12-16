//kelvin temp
const kelvin = 293;

//celsius temp
const celsius = kelvin - 273;

//newton temp
let newton = celsius * (33 / 100);
//round to nearest decimal
newton = Math.floor(newton);

//celsius
let fahrenheit = celsius * (9/5) + 32;
//round to nearest decimal
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
