
interface Reportable {
  summary: () => string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(){
    return `Name: ${this.name}`
  }
}

const drink = {
  color: 'brown',
carbonated : true,
suger: 40,
summary(){
  return `Sprite sugar: ${this.sugar}`
}
}

const printVehicle = (item: Reportable) : void => {
  console.log(`Name: ${item.summary}`)
}

printVehicle(oldCivic);

