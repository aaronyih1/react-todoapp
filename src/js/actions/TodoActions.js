import dispatcher from "../dispatcher";
import axios from "axios";


export function returnTodos() {
	axios.get('http://localhost:2403/todos')
	  .then(function (response) {
	  	updateTodos(response.data);
	  });
};

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}
// export function deleteTodo(id){
// 	dispatcher.dispatch({
// 		type: "DELETE_TODO",
// 		id,
// 	});
// }
export function updateTodos(data) {
	dispatcher.dispatch({
		type: "UPDATE_TODOS",
		todos: data,
	});
}

export function pushTodo(todo){
	axios.post('http://localhost:2403/todos', {
	    text: todo,
	  })
	  .then(function (response) {
	  })
}