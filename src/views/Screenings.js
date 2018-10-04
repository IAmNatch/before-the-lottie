import React, { Component } from "react";

class Screenings extends Component {
	state = {
		contactOpen: true
	};

	contactHandler = () => {
		this.setState({ contactOpen: !this.state.contactOpen });
	};
	render() {
		return (
			<div className="form-holder">
				<h2>Screening Request</h2>
				<form
					action="https://formspree.io/dylansher@gmail.com"
					method="POST"
				>
					<div class="group">
						<input type="text" name="name" />
						<span class="highlight" />
						<span class="bar" />
						<label>Name of Festival</label>
					</div>
					<div class="group">
						<input type="text" name="location" />
						<span class="highlight" />
						<span class="bar" />
						<label>Location</label>
					</div>
					<div class="group">
						<input type="text" name="date" />
						<span class="highlight" />
						<span class="bar" />
						<label>Date</label>
					</div>
					<div class="group">
						<input type="text" name="organization" />
						<span class="highlight" />
						<span class="bar" />
						<label>Type of Organization</label>
					</div>
					<div class="group">
						<input type="text" name="cost" />
						<span class="highlight" />
						<span class="bar" />
						<label>Paid or Free Festival?</label>
					</div>
					<div class="group">
						<input type="text" name="delivery" />
						<span class="highlight" />
						<span class="bar" />
						<label>Preffered Media Delivery</label>
					</div>
					<div class="group">
						<input type="text" name="screenings" />
						<span class="highlight" />
						<span class="bar" />
						<label>Number of Times Screened</label>
					</div>
					<div class="group">
						<input type="text" name="QandA" />
						<span class="highlight" />
						<span class="bar" />
						<label>Request Q&A with Director/Producer</label>
					</div>
					<div class="group">
						<input type="email" name="_replyto" />
						<span class="highlight" />
						<span class="bar" />
						<label>Email Address</label>
					</div>
					<input type="submit" value="Send" />
				</form>
			</div>
		);
	}
}

/*Location/Date

Number of attendees

Type of Organization: Not for profit? Community organization? Educational? Business? Private Hosting?

Paid tickets or free event?

Preferred delivery media? DCP? Digital Download? Bluray?

Number of times to screen

Request Q&A With director/producer?

*/

export default Screenings;
