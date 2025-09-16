const express = require("express");
const app = express();

/* HTTP methods */
//
// GET: Retrieve data from the server (safe, idempotent).
// POST: Create a new resource or submit data to be processed (not idempotent).
// PUT: Replace an existing resource entirely at a known URI; creates it if absent (idempotent).
// PATCH: Partially update an existing resource (not necessarily idempotent).
// DELETE: Remove a resource (idempotent).

/* Status codes */
//
// 200 OK — The request succeeded.
// 404 Not Found — The requested resource does not exist.
// 500 Internal Server Error — The server encountered an unexpected condition.
// 411 Length Required — The request is missing a required Content-Length header.
// 402 Payment Required — Payment is required to access the resource (rare; used by some APIs).


// create 4 routes 
/// get user can cehdck how many keident he y have and theiry health 
// post / user can add a new kideny 
// put user can repale a kideny , make it healthy 
// delete user can remove a kidney 

let user=[
    {
        name:"kirat",
        kdny:[{
            healthy:false
        }]
    }
]

app.get("/", (req, res) => {
    const johnKidney = user[0].kdny;
    // Filter out healthy kidneys

    const healthyKidneys = johnKidney.filter(kidney => kidney.healthy);
    // Filter out unhealthy kidneys
    const unhealthyKidneys = johnKidney.filter(kidney => !kidney.healthy);

    res.json({
        totalKidneys: johnKidney.length,
        numberOfHealthyKidneys: healthyKidneys.length, // kidneys where healthy is true
        numberOfUnhealthyKidneys: unhealthyKidneys.length // kidneys where healthy is false
        
    });
}).listen(5000,()=>{
    console.log("listening");

})
