const express = require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`server says hellooo from rahull on https://localhost:${port}`);
})