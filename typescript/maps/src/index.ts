import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Maps";

const user = new User()
const map = new Map('map');
const company = new Company();

map.addMarker(user)
map.addMarker(company)
