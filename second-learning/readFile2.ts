import { promises as fs } from "fs";

fs.readFile("./user.txt", "utf-8")
  .then((data) => fs.readFile(data.replace('\n', ''), "utf-8"))
  .then((data) => fs.readFile(data.replace('\n', ''), "utf-8"))
  .then((data) => console.log(data.replace('\n', '')));
