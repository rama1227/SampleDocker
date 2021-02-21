const express = require("express");

const app = express();

app.get("/", (req,res)=>{ 

    res.send("Hello all ! Welcome to thunder buddies");
});


app.listen(8080, ()=>{

console.log("listen to 8080 port");
});
