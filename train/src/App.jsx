import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		timer: 0,
		status: false
	};

	startTimer = () => {
		this.setState({ status: true });
		this.myInterval = setInterval(() => {
			this.setState({ timer: this.state.timer + 1 });
		}, 1000);
	};

	stopTimer = () => {
		this.setState({ status: false });
		clearInterval(this.myInterval);
	};

	resetTimer = () => {
		clearInterval(this.myInterval);
		this.setState({ timer: 0, status: false });
	};

	componentDidMount() {
		if (localStorage.timerValue) {
			this.setState({ timer: +localStorage.timerValue });
		}
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		window.onbeforeunload = () => {
			localStorage.timerValue = this.state.timer;
		};

		return (
			<div className='App'>
				<div className="nav">
					<button onClick={this.state.status ? this.stopTimer : this.startTimer}>{this.state.status ? 'stop' : 'start'}</button>
					<button onClick={this.resetTimer}>reset</button>
				</div>
				<div className="timer">{this.state.timer}</div>
			</div>

		);
	}
}

export { App };
