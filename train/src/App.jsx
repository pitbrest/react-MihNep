import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		timer: 0
	};

	stopTimer = () => {
		clearInterval(this.myInterval);
	};

	startTimer = () => {
		this.myInterval = setInterval(() => {
			this.setState(prev => {
				return {
					timer: prev.timer + 1
				};
			});
		}, 1000);
	};

	componentDidMount() {
		if (localStorage.timerValue) {
			this.setState({ timer: +localStorage.timerValue });
			this.startTimer();
		} else {
			this.setState({ timer: 0 });
			this.startTimer();
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
					<button onClick={this.stopTimer}>stop</button>
					<button onClick={this.startTimer}>start</button>
				</div>
				<div className="timer">{this.state.timer}</div>
			</div>

		);
	}
}

export { App };
