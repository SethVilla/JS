import { View } from "./View";
import {User, UserProps} from '../models/Users'

export class UserShow extends View<User, UserProps> {
  template(){
    return `
    <div>
    <h1>User Name: ${this.model.get('name')}</h1>
    </div>
    `
  }
}
