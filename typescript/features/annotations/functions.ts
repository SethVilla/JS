const add = (a : number, b : number): number => {
  return a + b
}

const substract = (a : number, b : number ) => {
  return a -b
}

const divide = (a : number, b : number ) => {
  return a  / b
}

const multiply = (a : number, b : number ) => {
  return a * b
}

const logger = (message : string) : void => {
  console.log(message)
}

 const throwError = (message: string): never => {
   throw new Error;
 }

const forecast = {
  date : new Date(),
  weather: 'sunny',
}

const logWeather = ({date, weather} : {date : string; weather: string}) => {
  return `${date} ${weather}`
}
