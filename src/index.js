import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, withRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";

//  Google Analytics
ReactGA.initialize("UA-133295797-1");
const history = createHistory();

ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(location => {
	ReactGA.set({ page: location.pathname + location.search });
	ReactGA.pageview(location.pathname + location.search);
});

// Location aware app...
const AppWithRouter = withRouter(() => <App {...history} />);

ReactDOM.render(
	<Router history={history}>
		<AppWithRouter />
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
