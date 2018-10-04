import React, { Component } from "react";

class Contact extends Component {
	state = {
		contactOpen: true
	};

	contactHandler = () => {
		this.setState({ contactOpen: !this.state.contactOpen });
	};
	render() {
		return (
			<div className="form-holder">
				<form
					method="POST"
					action="https://formspree.io/dylansher@gmail.com"
				>
					<div class="group">
						<input id="title" type="text" name="name" required />
						<span class="highlight" />
						<span class="bar" />
						<label>Title</label>
					</div>
					<div class="group">
						<input id="email" type="text" name="email" required />
						<span class="highlight" />
						<span class="bar" />
						<label>Email</label>
					</div>
					<div class="group">
						<input
							id="title"
							type="subject"
							name="subject"
							required
						/>
						<span class="highlight" />
						<span class="bar" />
						<label>Subject</label>
					</div>

					<div class="group">
						<textarea
							name="message"
							id="content"
							type="text"
							rows="4"
							cols="32"
							placeholder="Message"
							required
						/>
					</div>

					<button
						type="submit"
						id="button1"
						class="hvr-bubble-float-top"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Contact;
