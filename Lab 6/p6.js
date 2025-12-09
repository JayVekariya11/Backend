// Write a program that creates a folder named my-data using fs.mkdir(). If the folder already
// exists, show an appropriate message.

const fs = require("fs");

fs.mkdir("ab", (err) => {
  if (err) {
    if (err.code == "EExist") {
      console.log("Folder already exist");
      return;
    } else {
      console.log("err", err);
      return;
    }
  }

  console.log("floder created");
});
