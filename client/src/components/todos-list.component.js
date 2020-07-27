import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

export default class TodosList extends Component{

    constructor(props){
        super(props);
        this.state={
            todos:[]
        };
    }

    componentDidMount(){
        axios.get("http://localhost:4000/todos")
        .then(res=>{
            this.setState({
                todos:res.data
            })
        })
        .catch(e=>console.log(e));
    }
    mark=(id)=>{
      axios.get("http://localhost:4000/todos/mark/"+id)
      .then((res)=>{
          console.log(res.data);
      })
      .catch(e=>{
          console.log(e);
      });

      axios.get("http://localhost:4000/todos")
        .then(res=>{
            this.setState({
                todos:res.data
            })
        })
        .catch(e=>console.log(e));
    }
    componentDidUpdate(){
        axios.get("http://localhost:4000/todos")
        .then(res=>{
            this.setState({
                todos:res.data
            });
        })
        .catch(e=>console.log(e));
    }
    render(){
        return (
            <div>
              <h3 style={{margin:20}}>Todo List</h3>
              <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map((todo,index)=>{
                            return(
                                <tr>
                                    <td className={todo.todo_completed ? 'completed' : ''}>{todo.todo_description}</td>
                                    <td className={todo.todo_completed ? 'completed' : ''}>{todo.todo_responsible}</td>
                                    <td className={todo.todo_completed ? 'completed' : ''}>{todo.todo_priority}</td>
                                    <td>
                                      <Link to={"/edit/"+todo._id}>Edit</Link>          
                                      <button className={todo.todo_completed ?"btn btn-outline-danger btn-sm high":"btn btn-outline-success btn-sm high"} onClick={()=>this.mark(todo._id)}>
                                      {
                                          todo.todo_completed?"Unmark" : "Mark as Done"
                                      }
                                    </button>
                                    </td>        
                                </tr>
                            );
                        })
                    }
                </tbody>
              </table>
            </div>
        )
    }
}