import React from "react";

export const Donate = props => {
	return (
		<div>
			<div className="donate-intro">
				<h3> We still need your help!</h3>
			</div>
			<div className="donate-now">
				<h1> Who is funding this project?</h1>
				<p> People just like you! </p>
			</div>
			<form
				className="payPall-button"
				action="https://www.paypal.com/cgi-bin/webscr"
				method="post"
				target="_top"
				target="_blank"
			>
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input
					type="hidden"
					name="hosted_button_id"
					value="4Q92TDWKDLFP2"
				/>
				<input
					type="image"
					src="./svg/donate.svg"
					border="0"
					name="submit"
					alt="PayPal - The safer, easier way to pay online!"
				/>
				<img
					alt=""
					border="0"
					src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
					width="1"
					height="1"
				/>
				<p className="donate-text">
					{" "}
					Our goal was to create a film, purely funded by
					crowdfunding, community organizations and local businesses.
					This was important to ensure that we did not have to answer
					to any higher up organizations or companies about the topics
					of the film. We wanted to go on an honest exploration and
					document the message of the hard working farmers that
					provide us with food everyday. We did not accept any funds
					for the production of this project from companies or
					organizations that we felt would compromise the integrity of
					the film.
				</p>
			</form>
		</div>
	);
};
