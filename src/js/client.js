import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from "react-router";

import Layout from "./components/Layout";
import Todolist from "./components/Todolist.js";
import Signup from "./components/Signup.js";


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRedirect to="/" />
			<IndexRoute component={Todolist}></IndexRoute>
			<Route path="signup" component={Signup}></Route>
		</Route>
	</Router>
	, app);

