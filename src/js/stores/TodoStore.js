import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [];
	}
	updateTodos(todos){
		this.todos = todos;
		this.emit("change");
	}
	createTodo(text) {
		this.emit("change");
	}
	pushTodo(todo){
		this.createTodo(todo);
		this.emit("change");
	}

	getAll() {
		return(this.todos);
	}
	handleActions(action) {
		switch(action.type){
			case "UPDATE_TODOS":{
				this.updateTodos(action.todos);
			}
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "PUSH_TODO" : {
				this.pushTodo(action.text);
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
