import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}
export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function checkBox(complete){
	dispatcher.dispatch({
		type: "CHECK_BOX",
		complete,
	});
}
