import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
	state = {
		keys: [],
		data: [],
		videoClicked: false
	};
	componentDidMount() {}
	render() {
		return (
			<div class="center-flex-column">
				<div className="content-root landing">
					<h2 className="site-subtitle">The Film</h2>
					<h1 class="site-title">Before the Plate</h1>
					<div class="vimeo-block">
						<div class="embed-container super-wide">
							<iframe
								id="vimeo-frame"
								src="https://player.vimeo.com/video/310837849"
								frameborder="0"
								webkitAllowFullScreen
								mozallowfullscreen
								allowFullScreen
							/>
						</div>
					</div>
					<h3>Streaming free for the month of February only!</h3>
					<p>
						The questions, the stories and the people behind where
						our food comes from and how it gets to our plate.
						Featuring John Horne, Executive Chef of the renowned
						Canoe restaurant in downtown Toronto.
					</p>
					<div class="social-wrapper">
						<div class="social-icons large">
							<a href="https://www.facebook.com/beforetheplate">
								<img
									height="32"
									width="32"
									src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
								/>
							</a>
							<a href="https://twitter.com/beforetheplate">
								<img
									height="32"
									width="32"
									src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
								/>
							</a>
							<a href="http://instagram.com/beforetheplate/">
								<img
									height="32"
									width="32"
									src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
								/>
							</a>
						</div>
						<a href="http://instagram.com/beforetheplate/">
							<p class="social-tag large">{"@beforetheplate"}</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Events;
