import { View } from "./View";
import { User, UserProps } from "../models/Users";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSaveClick = () : void => {
    this.model.save()
  }
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input")
    if (input) {
      const name = input.value
      this.model.set({name})
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  // onButtonClick(): void {
  //   console.log("hi there");
  // }

  // onHeaderHover(): void {
  //   console.log('H1 was hovered over')
  // }

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get('name')}"/>
    <button class="set-name">change name</button>
    <button class="set-age">set random age</button>
    <button class="save-model">save</button>
    </div>
    `;
  }
}
