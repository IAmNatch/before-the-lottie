import React from "react";
import { Link } from "react-router-dom";
var mobile = require("is-mobile");
export const Nav = props => {
	let nav;

	// Check if nav should be hidden for animation.
	if (props.view === "stop" || props.view === "map") {
		nav = "";
	} else {
		const navList = [
			{ link: "/", title: "home" },
			{ link: "/about", title: "about" },
			{ link: "/contact", title: "contact" },
			// { link: "/donate", title: "donate" },
			{ link: "/screenings", title: "host a screening" },
			{ link: "/events", title: "events" },
			// { link: "/landing", title: "watch now" }
		];
		const navListWithHome = [
			{ link: "/", title: "home" },
			{ link: "/about", title: "about" },
			{ link: "/contact", title: "contact" },
			// { link: "/donate", title: "donate" },
			{ link: "/screenings", title: "host a screening" },
			{ link: "/events", title: "events" },
			// { link: "/landing", title: "watch now" }
		];

		nav = [];
		if (props.page === "home") {
			navList.map((item, i) => {
				nav.push(
					<li
						key={`navItem${i}`}
						className={`nav-item ${
							props.page === item.title ? "nav-item-active" : ""
						}`}
					>
						<Link
							className="nav-item nav-item-link"
							onClick={() => {
								props.pageHandler(item.title);
							}}
							to={`${item.link}`}
						>
							{item.title}
						</Link>
					</li>
				);
			});
		} else {
			navListWithHome.map((item, i) => {
				nav.push(
					<li
						key={`navItem${i}`}
						className={`nav-item ${
							props.page === item.title ? "nav-item-active" : ""
						}`}
					>
						<Link
							className="nav-item nav-item-link"
							onClick={() => {
								props.pageHandler(item.title);
							}}
							to={`${item.link}`}
						>
							{item.title}
						</Link>
					</li>
				);
			});
		}
	}
	if (mobile()) {
		nav.unshift();
	}
	return <div className="nav animated fadeInLeft">{nav}</div>;
};
