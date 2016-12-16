import React from "react";

export default class Todo extends React.Component {
	sortCirclePos(type){
		const color = this.props.color;
		const action = {
			width: '15px',
			height: '15px',
			borderRadius: '7.5px',
			backgroundColor: color,
			display: 'inline-block',
			position: 'relative',
			left: '-39px',
			top:'0px'
		}
		const goal = {
			width: '15px',
			height: '15px',
			borderRadius: '7.5px',
			backgroundColor: '#929292',
			display: 'inline-block',
			position: 'relative',
			left: '-39px',
			top:'0px'
		}
		const core_value = {
			width: '15px',
			height: '15px',
			borderRadius: '7.5px',
			backgroundColor: '#D8D8D8',
			display: 'inline-block',
			position: 'relative',
			left: '-39px',
			top:'30px'
		}
		switch(type){
			case "goal":
				return(goal);
			case "core-value":
				return(core_value);
			default:
				return(action);
		}
	};
	sortTextStyles(type){
		const action = {
			fontSize:'37pt',
			color: '#585858',
			fontWeight:'100',
			fontFamily:"Source Sans Pro, Calibri, Candara, Arial, sans-serif",
			listStyleType: 'none',
			width: '100%',
			lineHeight: '38pt',
			padding: '20px 0px'
		}
		const goal = {
			fontSize:'37pt',
			color: '#929292',
			fontWeight:'100',
			fontFamily:"Source Sans Pro, Calibri, Candara, Arial, sans-serif",
			listStyleType: 'none',
			width: '100%',
			lineHeight: '38pt',
			padding: '20px 0px'
		}
		const core_value = {
			fontSize:'37pt',
			color: '#D8D8D8',
			fontWeight:'100',
			fontFamily:"Source Sans Pro, Calibri, Candara, Arial, sans-serif",
			listStyleType: 'none',
			width: '100%',
			lineHeight: '38pt',
			padding: '20px 0px'
		}
		switch(type){
			case "goal":
				return(goal);
			case "core-value":
				return(core_value);
			default:
				return(action);
		};
	console.log(this.sortStyles(this.props.type));
	};
	render(){ 
		return(
			<li style={this.sortTextStyles(this.props.type)} type={this.props.type}><div style={this.sortCirclePos(this.props.type)}></div>{this.props.todoValue}</li>
		);
	}
}