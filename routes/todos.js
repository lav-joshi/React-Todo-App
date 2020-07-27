const express = require("express");
const Todo = require("../models/todo.model.js");
const bodyParser = require("body-parser");
const todoModel = require("../models/todo.model.js");

const app= express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/",(req,res)=>{
    Todo.find({},(err,todos)=>{
        if(err){
            console.log(err);
        }else{
            res.json(todos);
        }
    });
});

router.get("/:id",(req,res)=>{
    Todo.findById(req.params.id,(err,todo)=>{
        res.json(todo);
    });
});

router.get("/mark/:id",(req,res)=>{
    Todo.findById(req.params.id,async (err,todo)=>{
        todo.todo_completed=!todo.todo_completed;
        await todo.save();
        res.json(todo);
    });
})

router.post("/add",(req,res)=>{
    Todo.create(req.body,(err,todo)=>{
        if(err){
            res.status(400).send("adding new todo failed");
        }else{
            res.status(200).json({'todo':'todo added successfully'});
        }
    });
});

router.post("/update/:id",(req,res)=>{
    Todo.findById(req.params.id,(err, todo)=> {
        if (err)
            res.status(404).send('data is not found');
        else{
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save()
            .then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
          
    });
});
module.exports = router;