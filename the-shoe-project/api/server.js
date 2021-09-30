const express = require("express");

//const bodyParser = require('body-parser')
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/build"));
const fs = require("fs");

console.log("running server");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "shoes.json"));
});

app.get("/shoes", (req, res) => {
    res.sendFile(path.join(__dirname, "shoes.json"));
});

//app.use('/testAPI', testAPIRouter);

app.listen(process.env.PORT || 3000);
