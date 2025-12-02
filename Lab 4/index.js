const { log } = require("console")
const os=require("os")
const { uptime } = require("process")

console.log("Operating system name = ",os.type())

console.log("Release version = ",os.version())

console.log("Platform = ",os.platform())

console.log("Architecture = ",os.arch())

const totalmem=os.totalmem()
const tm=(totalmem)/(1024*1024*1024)
console.log("total memory = ", tm)

const freemem=os.freemem()
const fm=freemem/(1024*1024*1024)
console.log("free memory = ",fm)

console.log("user info = ",os.userInfo())

console.log("runiig time in second = ",os.uptime())
console.log("runiig time in hour = ",os.uptime()/3600)

console.log("cpu core = ",os.cpus())
