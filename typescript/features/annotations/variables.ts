let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date;

// string of arrays
let colors: string[] = ['red', 'crimson', 'scarlet'];
let myNumbers: number[] = [1,2,3];

class Car {

}

let car: Car = new Car();

// object Literal
let point: {x : number; y :number;} = {
  x: 10,
  y: 10
}

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates);

// delayed initialization

let words = ['red', 'crimson', 'scarlet'];
let foundWord: boolean; // = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') {
    foundWord = true;
  }
}

let nums = [-10, -20, -33];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
   numberAboveZero = nums[i];
}

