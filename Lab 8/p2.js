const express = require("express")

const app =express()

app.get("/",(req,res)=>{
    res.end("This is home page")
})

app.get("/about",(req,res)=>{
    res.end("This is about page")
})

app.get("/profile",(req,res)=>{
    res.end("This is profile page")
})

app.get("/contact",(req,res)=>{
    res.end("This is contact page")
})

app.get("/service",(req,res)=>{
    res.end("This is service page")
})

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

app. listen(3000,()=>{
    console.log("Server Start @3000")
})