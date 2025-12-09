const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello! The 'greet' event has been triggered.");
});

emitter.emit("greet");
