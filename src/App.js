import React ,{Component}from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component"; 
import logo from "./logo.jpg";
import {Cube} from "styled-loaders-react";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
          loading:false
      })
     },3000)
  }
  render(){
  return (
    <div>
    {
      this.state.loading ? <Cube color="black" size="70px"/> :
    
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <img src={logo} width="30" height="30" alt="exercise"></img>
          </div>
          <Link to="/" className="navbar-brand"><b>Todo App</b></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create todo</Link>
          </li>
        </ul>
      </div>
    </nav>
      <Route path="/" exact component={TodosList}></Route>
      <Route path="/edit/:id" component={EditTodo}></Route>
      <Route path="/create" component={CreateTodo}></Route> 
      </div> 
   
    </Router>
  }
  </div>
  );
  }
}

export default App;
