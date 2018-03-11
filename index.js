const express = require("express");
const app = express();


app.get('/', (req, res) =>{
    console.log("called '/'");
    res.send({"Hi" : "there!"});

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server running on: " +PORT);
});