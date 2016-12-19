import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./components/Layout";
import Todolist from "./components/Todolist.js";
import SignUp from "./components/SignUp.js";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Todolist}></IndexRoute>
			<Route path="signup" component={SignUp}></Route>
		</Route>
	</Router>
	, app);

