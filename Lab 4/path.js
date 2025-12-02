const path=require("path");

console.log("dir name : ",path.dirname("E:\Sem 4\Backend\Lab 4\darshan.txt"))

console.log("file name : ",path.basename("E:\\Sem 4\\Backend\\Lab 4\\darshan.txt"))

console.log("file extension : ",path.extname("E:\Sem 4\Backend\Lab 4\\darshan.txt"))

console.log("full path : ",path.resolve("darshan.txt"))

const join=path.join("user","arjun","document","project")
console.log("join path : ",join)

const nompath=path.normalize("//folder//subfolder////file.txt")
console.log("normalize path : ",nompath);

const pathtype=path.isAbsolute("E:\\Sem 4\\Backend\\Lab 4\\darshan.txt")
if(pathtype){
    console.log("absolute path")
}
else{
    console.log("relative path")
}

console.log("full path : ",path.resolve("folder","subfloder","app.js"))