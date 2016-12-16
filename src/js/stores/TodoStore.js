import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [{
			id: '42319545',
			text: '2000 user product',
			complete: false,
			type: 'goal'
		},
		{
			id: '4231939445',
			text: 'SELF-FULFILLMENT',
			complete: false,
			type:'core-value'
		}];
	}

	createTodo(text) {
		const id = Date.now();
		const colorList = ['red', 'blue', 'green'];
		const color = colorList[Math.floor((Math.random() * 3))];
		this.todos.unshift({
			id,
			text,
			complete: false,
			color: color,
			type: 'action'
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
