import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
	      {
	        id: 3948111923,
	        text: "walk the catya",
	        complete: "true",
	      },
	      {
	        id: 9835728653,
	        text: "walk the doge",
	        complete: "false",
	      }
	    ];
	}

	createTodo(text) {
		const id = Date.now();

		this.todos.push({
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
