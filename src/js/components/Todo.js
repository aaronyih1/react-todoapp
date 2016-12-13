import React from "react";

export default class Todo extends React.Component {
	render(){
		return(
			<ul><input type="checkbox" defaultChecked={(this.props.complete == "true") ? "true" : ""} />{this.props.todoValue}</ul>
		);
	}
}