import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
	state = {
		keys: [],
		data: []
	};
	componentWillMount() {
		const url =
			"https://sheets.googleapis.com/v4/spreadsheets/1dZoIs6ZKhOFnsHIoXUZIXBY55d83XHOvr27NIhjAoZg/values:batchGet?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&ranges=Sheet1&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCjThkuw2dWglOqQx4MWWyhKCK5uJmfbc0";
		axios.get(url).then((res, err) => {
			console.log(res.data.valueRanges[0].values);
			let data = res.data.valueRanges[0].values;
			this.setState({ keys: data[0], data: data.slice(1) });
		});
	}
	render() {
		return (
			<div className="list-holder">
				<h2>Events</h2>
				<div className="list">
					{this.state.data.map((item, index) => (
						<div key={index} class="item">
							<div>
								<span class="bold">Organization: </span>
								<span>{item[0]}</span>
							</div>
							<div>
								<span class="bold">Location: </span>
								<span>{item[1]}</span>
							</div>
							<div>
								<span class="bold">Date: </span>
								<span>{item[2]}</span>
							</div>
							<div>
								<span class="bold">Ticket Price: </span>
								<span>{item[3]}</span>
							</div>
							<div>
								<span class="bold">Link: </span>
								<a href={item[4]}>
									<span>Link</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Events;
