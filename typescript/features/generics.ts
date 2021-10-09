class ArrayOfNums {
  constructor(public collection: number[]){}
  get(index: number) : number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]){}
  get(index: number) : string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]){}
  get(index: number) : T {
    return this.collection[index]
  }

}

new ArrayOfAnything<string>(['a','b','c']);

// type inference

const array = new ArrayOfAnything([1,2,3])

function printStrings(array: string[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

  }
}

  function printNumbers(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);

    }
}

function printAnything<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

  }
}

printAnything(['a', 'b', 'c'])

// Generic Constraints

class Car {
  print() {
    console.log('I am Car')
  }
}

class Home {
  print() {
    console.log('I am Home')
  }
}

interface Printable {
  print(): void;
}

function printHousesorCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesorCar([new Home(), new Car()])
