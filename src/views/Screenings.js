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
						<input required type="text" name="first_name" />
						<span class="highlight" />
						<span class="bar" />
						<label>First Name</label>
					</div>
					<div class="group">
						<input required type="text" name="last_name" />
						<span class="highlight" />
						<span class="bar" />
						<label>Last Name</label>
					</div>
					<div class="group">
						<input required type="email" name="_replyto" />
						<span class="highlight" />
						<span class="bar" />
						<label>Email Address</label>
					</div>
					<div class="group">
						<input required type="text" name="date" />
						<span class="highlight" />
						<span class="bar" />
						<label>Date</label>
					</div>
					<div class="group">
						<input required type="text" name="city" />
						<span class="highlight" />
						<span class="bar" />
						<label>City </label>
					</div>
					<div class="group">
						<input required type="text" name="province" />
						<span class="highlight" />
						<span class="bar" />
						<label>Province / State</label>
					</div>
					<div class="group">
						<input required type="text" name="country" />
						<span class="highlight" />
						<span class="bar" />
						<label>Country</label>
					</div>
					<div class="group">
						<input required type="text" name="org_name" />
						<span class="highlight" />
						<span class="bar" />
						<label>Name of Organization</label>
					</div>
					<div class="group-special group">
						<span class="highlight" />
						<span class="bar" />
						<label class="radio-label">Type of Organization</label>
						<select name="organization">
							<option value="NFP">Not for Profit</option>
							<option value="Corporate">Corporate</option>
							<option value="EDU">Educational Institution</option>
						</select>
						{/* Radio Button */}
					</div>
					<div class="group-special group">
						<span class="highlight" />
						<span class="bar" />
						<label class="radio-label">Event Type</label>
						<select name="event_type">
							<option value="ticketed">Ticketed</option>
							<option value="free">Free</option>
						</select>
						{/* Radio Button */}
					</div>
					<div class="group">
						<input required type="text" name="screenings" />
						<span class="highlight" />
						<span class="bar" />
						<label>Number of Screenings</label>
					</div>
					<input required type="submit" value="Send" />
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
