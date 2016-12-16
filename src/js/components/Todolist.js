import React from "react";
import Todo from "./Todo.js";
import TodoStore from "../stores/TodoStore.js";
import * as TodoActions from "../actions/TodoActions.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
			this.state.todo = "";
			e.target.value = "";
		}
	}
	render(){
		const {todos} = this.state;
		const timelineTop = {
			height: '50px',
			position: 'absolute',
			left: '30px',
			top: '115px',
			borderLeft: 'solid #D8D8D8 3px'
		}
		const circle = {
			width: '15px',
			height: '15px',
			borderRadius: '7.5px',
			backgroundColor: 'white',
			border: '#D8D8D8 solid 3px',
			display: 'inline-block',
			position: 'relative',
			left: '-9px',
			top: '-1px'
		}
		const inputStyle = {
			backgroundColor: 'red !important',
			width: '95%',
			height: '67px',
			lineHeight: '67pt !important',
			fontSize: '37pt',
			backgroundColor: 'transparent',
			color: '#585858',
			border: 'none',
			boxShadow: 'none',
			fontWeight: '100',
			padding: '0',
			marginLeft: '60px'
		};
		const ulStyle= {
			padding: '0',
			marginLeft: '30px',
			paddingLeft: '30px',
			width: '95%',
			borderLeft: 'solid #D8D8D8 3px'
		}
		const TodoComponents = todos.map((todo) => {
		  return <Todo key={todo.id} todoValue={todo.text} complete={todo.complete} color={todo.color} type = {todo.type} />;
		});
		return(
			<div>
				<input className="form-control" style={inputStyle} type="text" onChange={this.handleChange.bind(this)} onKeyPress={this.createTodo.bind(this)} autoFocus/>
				<div style={timelineTop}>
					<div style={circle}></div>
				</div>
				<ul style={ulStyle}>
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{TodoComponents}
					</ReactCSSTransitionGroup>
				</ul>
			</div>
		);
	}
}