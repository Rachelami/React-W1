import React from "react";


class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            status: "False",
		};
	}

    ifclick() {
        if (this.state.status === "False") {
            this.state.status = "True"
            // this.state.status && <Timer /> ;
        }
        else {
            this.state.status = "False"
        }
    }


	render() {
		return (
			<div class="custom-control custom-checkbox">
				<input
					type="checkbox"
					class="custom-control-input"
					id="defaultUnchecked"
					onClick={ ifclick() }
				></input>

				{/* <label class="custom-control-label" for="defaultUnchecked">	
				</label> */}
                {this.state.status && <Timer /> 
}
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
