const profile = {
  name : 'seth',
  age: 30,
  coords : {
    lat: 0,
    lng: 15
  },
  setAge(age: number) : void {
    this.age = age
  }
}

const {name, age} : {name: string; age : number} = profile;

//const {coords : {lat, lng}} : {coords: {lat : number; lng : number}} = profile;

