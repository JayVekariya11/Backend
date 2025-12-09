const child_process = require("child_process");
const { stdout, stderr } = require("process");

child_process.exec("node --version", (err, stdout, stderr) => {
  if (err) {
    console.log("err", err);
  }
  if (stderr) {
    console.log("stderr", stderr);
  }
  console.log("stdout", stdout);
});
