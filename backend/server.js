const express=require("express");
const app=express();

const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT||4000;
require("./db/mongoose");
app.use(cors());
app.use(bodyParser.json());
const todoRoutes = require("./routes/todos")
app.get("/",(req,res)=>{
    res.send("Hi Lav");
})
app.use("/todos",todoRoutes);
app.listen(PORT, (req,res)=>{
    console.log("Server Started at "+PORT);
});