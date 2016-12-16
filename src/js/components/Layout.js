import React from "react";
import Todolist from "./Todolist.js";

export default class Layout extends React.Component {
  render() {
  	const titleStyle= {
  		textTransform: 'uppercase',
  		color: '#D8D8D8',
  		fontSize:'37pt',
      paddingLeft: '55px'
  	}
    return (
      <div>
      	<h1 style={titleStyle}>Do not forget to</h1>
        <Todolist />
      </div>
    );
  }
}
