const fs = require("fs");
let a = 324702;
let b = 4928;


setImmediate(()=>{
        console.log("call me asap");
},0);

function mul(a,b){
    console.log(a*b);
}

mul(a,b);
