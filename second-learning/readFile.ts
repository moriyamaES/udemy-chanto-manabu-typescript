import fs from "fs";

fs.readFile("./user.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});