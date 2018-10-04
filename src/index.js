import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(({ history }) => <App {...history} />);

ReactDOM.render(
	<BrowserRouter>
		<AppWithRouter />
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
