import { load } from './load.js'
import { menuModule } from './menuModule.js'
import { contactModule } from './contactModule.js'
import css from "./styles.css";
const container = document.getElementById("container");
const navBar = document.createElement("ul");
navBar.id = "navBar";
container.append(navBar);
const home = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");
home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contacts";
navBar.append(home);
navBar.append(menu);
navBar.append(contact);
home.addEventListener("click", load);
menu.addEventListener("click", menuModule);
contact.addEventListener("click", contactModule);
load();
