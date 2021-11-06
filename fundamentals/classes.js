
class warrior {
  get whoosh(){
    console.log('whoosh')
  }
}

class person extends warrior {
  constructor(name, lastname){
    super();
    this.name = name
    this.lastname = lastname
  }

 get greeting () {
console.log(this.lastname)
  }
}


const test = new person('Villa');

console.log(test.name)
console.log(test.whoosh)
