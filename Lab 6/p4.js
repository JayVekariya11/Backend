// Create a program that appends the text into a file named output.txt.

const fs=require("fs")

fs.appendFile("output.txt",".txt",(err)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log("data appened")
    }
})