import React from "react";

export default class Input extends React.Component {
	handleChange(e){
		const todo = e.target.value;
		this.props.changeTodo(todo);
	}
	render(){
		return(
			<div>
				<input type="text" onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}