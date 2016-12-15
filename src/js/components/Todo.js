import React from "react";

export default class Todo extends React.Component {
	render(){
		const todoItems = {
			fontSize:'37pt',
			color: '#929292',
			fontWeight:'100',
			fontFamily:"Source Sans Pro, Calibri, Candara, Arial, sans-serif",
			listStyleType: 'none',
			width: '100%'
		}
		return(
			<li style={todoItems}><input type="checkbox" style={{display:'none'}} defaultChecked={(this.props.complete == "true") ? "true" : ""} />{this.props.todoValue}</li>
		);
	}
}