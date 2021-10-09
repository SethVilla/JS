
const carMakers = ['tesla', 'jeep', 'toyota'];
const dates = [new Date(), new Date()];

// string[][]
// array of string arrays

const carsByMake: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0];
const test = 3
console.log(typeof(typeof null))

const myCar = carMakers.pop();

carMakers.map((car : string) : string => car.toUpperCase())

const importantDates: (Date | string)[] = [new Date()]
