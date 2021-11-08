import 'reflect-metadata'

class Plane  {
  color: string = 'red'

  @markFunction('hi there')
  fly(): void {
    console.log('vroom')
  }
}

function markFunction(secretInfo: string){
  return function(target: Plane, key: string){
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

function printMetaData(target: typeof Plane){
  for(let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}

// Reflect.defineMetadata('note', 'hi there', plane, 'color')

// console.log(plane)

// const note = Reflect.getMetadata('note', plane, 'color')

// console.log(note)

