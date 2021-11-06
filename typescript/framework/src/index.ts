import { User } from "./models/Users";

const user = new User({id: 1, name: 'Seth Villa', age: 30});

user.get('name')

user.on('save', () => {
  console.log(user)
})

user.save();

// user.on('change', () => { console.log('change 1'))
// user.on('change', () => { console.log('change 2')})
// user.on('save', () => { console.log('save was triggered')})
// user.trigger('hey')

// const colors = {
//   color: 'red',
//   printColor() {
//    console.log(this.color)

//    // console.log(colors.color)
//   }
//  }
//  colors.printColor();
//  // destructuring printColor error
//  const printColor = colors.printColor
//  printColor();
