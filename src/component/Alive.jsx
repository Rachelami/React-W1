import React from "react";

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false,
		};
	}

	ifclick = () => {
        
        // this.state.status = !this.state.status;
        // console.log(this.state.status);
        
            this.setState({ status: !this.state.status })
        // return "work"
    }
	// 	// if (this.state.status === false) {
	// 	// 	this.setState({ status: true });
	// 	// 	// this.state.status && <Timer /> ;
	// 	// } else {
	// 	// 	this.setState({ status: false });
	// 	// }
	// };

	render() {
		return (
			<div class="custom-control custom-checkbox">
				<input
					type="checkbox"
					class="custom-control-input"
                    id="defaultUnchecked"
					onClick={this.ifclick}
				></input>

				{/* <label class="custom-control-label" for="defaultUnchecked">	
				</label> */}
				{this.state.status&&<Timer/>}
			</div>
		);
	}
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
		};
	}

	componentDidMount() {
		this.timerInterval = setInterval(() => {
			this.setState({ time: this.state.time + 1 });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerInterval);
	}

	render() {
		const { time } = this.state;
		return (
			<p>
				<div>Hello</div>
				<span> {time >= 1 && <h1>I'm alive</h1>}</span>

				{/* { click%2 && <span> {time >= 1 && <h1>I'm alive</h1>}</span>} */}
				{/* {click%2 == 0 ? //if click is even
				<span> {time >= 1 && <h1>I'm alive</h1>}</span> //print i'm alive after 1 sec
                : click = click //else, do nothing 
                } */}
			</p>
		);
	}
}

export default Checkbox;
