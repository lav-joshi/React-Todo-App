const express=require("express");
const path=require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT||4000;
require("./db/mongoose");
const app=express();
app.use(cors());
app.use(bodyParser.json());

//server static assets if is in production 

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const todoRoutes = require("./routes/todos")
app.get("/",(req,res)=>{
    res.send("Hi Lav");
})
app.use("/todos",todoRoutes);
app.listen(PORT, (req,res)=>{
    console.log("Server Started at "+PORT);
});