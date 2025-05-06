"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.promises.readFile("./user.txt", "utf-8")
    .then((data) => fs_1.promises.readFile(data.replace('\n', ''), "utf-8"))
    .then((data) => fs_1.promises.readFile(data.replace('\n', ''), "utf-8"))
    .then((data) => console.log(data.replace('\n', '')));
