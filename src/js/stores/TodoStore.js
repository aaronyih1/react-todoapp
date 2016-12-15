import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
	    ];
	}

	createTodo(text) {
		const id = Date.now();

		this.todos.unshift({
			id,
			text,
			complete: false,
		})

		this.emit("change");
	}
	checkBox(complete) {
		if(complete == true){

		}
	}
	clearInput(){
		this
	}

	getAll() {
		return(this.todos);
	}
	handleActions(action) {
		switch(action.type){
			case "CREATE_TODO": {
				this.createTodo(action.text)
			}
			case "CHECK_BOX": {
				this.checkBox(action.complete)
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
