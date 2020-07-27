const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  todo_description:{
      type:String,
      trim: true,
  },
  todo_responsible:{
    type:String,
    trim: true,
  },
  todo_priority:{
    type:String,
    trim: true,
  },
  todo_completed:{
    type:Boolean,
  }
},{
    timestamps:true
});

module.exports = mongoose.model("Todo", Todo);