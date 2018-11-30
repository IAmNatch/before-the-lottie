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
import Events from "./views/Events";
// React Router
import { Route } from "react-router-dom";

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
		if (mobile()) {
			this.props.push("about");
		}
		const location = window.location.pathname.replace(
			/^\/([^\/]*).*$/,
			"$1"
		);
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
		console.log(this.props);

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
				<Route path="/donate" component={Donate} />
				<Route path="/screenings" component={Screenings} />
				<Route path="/events" component={Events} />
			</div>
		);
	}
}

export default App;
