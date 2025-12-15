const http = require('http')
const url = require("url")

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is Home Page")
    }
    else if (req.url==="/about"){
        res.end("This is About Page")
    }
    else if (req.url==="/contact"){
        res.end("This is Contact Page")
    }
    else if (req.url==="/profile"){
        res.end("This is profile Page")
    }
    else if (req.url==="/service"){
        res.end("This is Service Page")
    }
    
})
server.listen(3000,()=>{
    console.log("server start")
})