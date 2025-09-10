const express = require('express');
const app = express();



const http = require("http");
const myServer = http.createServer((req,res)=>{
            console.log("new request rec");
            res.end("hello from server");    
});
console.log("testing")
myServer.listen(8001,()=>{
    console.log("server started")
});


