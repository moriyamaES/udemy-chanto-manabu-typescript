"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile("./user.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});
