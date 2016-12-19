import React from "react";

export default class Todo extends React.Component {
	sortCircle(type, coreValue){
		const colorList = ['#D8495B', '#5C92D1', '#2CAF38'];
		function sortColor(coreValue){
			switch(coreValue){
				case "self-fulfillment":
					return("#D8495B");
				case "health":
					return("#5C92D1");
				case "career":
					return("#2CAF38");
				default :
					return("black");
			};

		};
		const color = sortColor(coreValue);
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
	};
	render(){ 
		return(
			<li style={this.sortTextStyles(this.props.type)} type={this.props.type} coreValue={this.props.coreValue}><div style={this.sortCircle(this.props.type, this.props.coreValue)}></div>{this.props.todoValue}</li>
		);
	}
}