//  Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version

const fs=require("fs")

console.log("start")

try{
    data=fs.readFileSync("data.txt")
    console.log(data.toString())
}
catch(err){
    console.log("Error",err)
}

console.log("end")