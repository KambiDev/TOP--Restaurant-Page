import "./css/styles.css";
import { createHeader } from "./js/header.js";
import { createMain } from "./js/main.js";
import { createFooter } from "./js/footer.js";

const content = document.querySelector("#content");
const myHeader = createHeader();
const myMain = createMain();
const myFooter = createFooter();

content.append(myHeader, myMain, myFooter);