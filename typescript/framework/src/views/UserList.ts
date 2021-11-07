import { User, UserProps } from "../models/Users";
import { CollectionView} from "./CollectionView";
import { UserShow } from "./UserShow";

export class Userlist extends CollectionView<User, UserProps> {

  renderItem(model: User, itemParent: Element) : void {
    new UserShow(itemParent, model).render()
  }
}
