import {Userlist} from './views/UserList'
import { Collection } from './models/Collection'
import {User, UserProps} from './models/Users'

const url = 'http://localhost:3000/users'

const users = new Collection(url, (json: UserProps) =>  User.buildUser(json))

users.on('change', () => {
  const root = document.getElementById('root');
  if (root){
    new Userlist(root, users).render()
  }
})

users.fetch()

// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/Users";
// const user = User.buildUser({name: 'Uxbal', age: 8})
//  const root = document.getElementById('root');

//  if (root) {
//   const userEdit = new UserEdit(root, user)
//   userEdit.render()
//   console.log(userEdit)
//  } else {
//    throw 'No root div'
//  }

