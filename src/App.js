import React, { Component } from "react";
import "./css/App.css";
import "./css/Fonts.css";
// Nav Bar
import { Nav } from "./components/Nav";
// All views
import { Main, Donate } from "./views/";
import About from "./views/About";
import Contact from "./views/Contact";
import Screenings from "./views/Screenings";
import Landing from "./views/Landing";
import Events from "./views/Events";
// React Router
import { Route } from "react-router-dom";
import ReactGA from "react-ga";
// pls ignore
var mobile = require("is-mobile");

class App extends Component {
	state = {
		navButtonsDisabled: false,
		page: "home"
	};

	pageHandler = page => {
		this.setState({ page: page });
	};

	componentWillMount() {
		// Used to aid in naviagtion by knowing current url. Idono why I did it like this.
		// I was dumb, and I hope I'm less dumb now, but probably not that much.
		const location = window.location.pathname.replace(
			/^\/([^\/]*).*$/,
			"$1"
		);
		// Home doensn't show to mobile.
		if (mobile() && location == "") {
			// This one alerts handlers (dumb)
			this.pageHandler("about");
			// This one changes page (smart, this should trigger everything.)
			return this.props.push("about");
		}

		// Default Route
		if (location === "") {
			this.pageHandler("home");
		} else {
			this.pageHandler(location);
		}
	}

	disableNavButtonsHandler = state => {
		this.setState({ navButtonsDisabled: state });
	};

	render() {
		return (
			<div
				className={`App ${this.state.page !== "home" ? "notHome" : ""}`}
			>
				<div className="header">
					<Nav
						page={this.state.page}
						pageHandler={this.pageHandler}
					/>
				</div>

				<Route
					path={"/"}
					exact
					component={() => {
						return (
							<Main
								// WHAT IS A VIEW MIRROR? COME ON SHANE! - Shane
								viewMirror={this.viewMirror}
								navButtonsDisabled={
									this.state.navButtonsDisabled
								}
								disableNavButtonsHandler={
									this.disableNavButtonsHandler
								}
							/>
						);
					}}
				/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				{/* <Route path="/donate" component={Donate} /> */}
				<Route path="/screenings" component={Screenings} />
				<Route path="/events" component={Events} />
				<Route path="/landing" component={Landing} />
			</div>
		);
	}
}

export default App;
