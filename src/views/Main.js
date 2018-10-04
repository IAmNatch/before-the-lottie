import React from "react";
import LottiePlayer from "./../components/lottie/LottiePlayer";
var mobile = require("is-mobile");

export const Main = props => {
	return [
		<LottiePlayer
			key="lottiePlayer"
			navButtonsDisabled={props.navButtonsDisabled}
			disableNavButtonsHandler={props.disableNavButtonsHandler}
		/>,
		<div className="mobile-warning">
			<h2 className="oops"> OOPS </h2>

			<p>
				This experience is optimized for desktop and tablet displays.
				<br /> <br /> Please visit our about page to learn more about
				the movie or try again on a compatible device.
			</p>
		</div>,
		<div key="footer" className="footer">
			<div className="title">
				<h2>The Film</h2>
				<h1>Before the Plate</h1>
			</div>
			<div className="byline">
				<p>
					The questions, the stories and the people behind where our
					food comes from and how it gets to our plate
				</p>
			</div>
		</div>
	];
};
