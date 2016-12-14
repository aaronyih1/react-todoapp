import React from "react";
import Todo from "./Todo.js";
import TodoStore from "../stores/TodoStore.js";
import * as TodoActions from "../actions/TodoActions.js";

export default class Todolist extends React.Component {

	constructor(){
	  super();
	  this.state = {
	    todos: TodoStore.getAll(),
	  };
	}

	componentWillMount() {
		TodoStore.on("change", () => {
			this.setState({
				todos: TodoStore.getAll(),
			});
		});
	}
	changeTodo(todo){
	  this.setState({todo});
	}
	handleChange(e){
		const todo = e.target.value;
		this.changeTodo(todo);
	}
	createTodo(e){
		if(e.key === 'Enter'){
			TodoActions.createTodo(this.state.todo);
		}
	}
	render(){
		const {todos} = this.state;
		const inputStyle = {
			backgroundColor: 'red !important',
			width: '300px',
			height: '67px',
			lineHeight: '67pt !important',
			fontSize: '37pt',
			backgroundColor: 'transparent',
			color: '#929292',
			border: 'none',
			boxShadow: 'none',
			fontWeight: '100',
			padding: '0'
		};
		const ulStyle= {
			padding: '0'
		}
		const TodoComponents = todos.map((todo) => {
		  return <Todo key={todo.id} todoValue={todo.text} complete={todo.complete} />;
		});
		return(
			<div>
				<input className="form-control" style={inputStyle} type="text" onChange={this.handleChange.bind(this)} onKeyPress={this.createTodo.bind(this)} autoFocus/>
				<ul style={ulStyle}>
					{TodoComponents}
				</ul>
			</div>
		);
	}
}