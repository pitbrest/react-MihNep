import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		card: '',
		email: '',
		checkedStatus: false
	};

	cardnumberRef = React.createRef();
	emailRef = React.createRef();

	cardNumberHandler = (e) => {
		this.setState(() => {
			return { card: e.target.value };
		}, () => { if (this.state.card.length === 6) { this.emailRef.current.focus(); } });
	};

	emailHandler = (e) => {
		this.setState({ email: e.target.value });
	};

	checkboxHandler = (e) => {
		this.setState({
			checkedStatus: e.target.checked
		});
	};

	componentDidMount() {
		this.cardnumberRef.current.focus();
	}

	checking = () => {
		const isValidEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(this.state.email);
		return isValidEmail ? alert('all is ok') : alert('need to do something');
	};

	render() {
		return (
			<div className='App'>
				<div className="content">
					<div className="info">
						<input type="number" placeholder='card number' ref={this.cardnumberRef} value={this.state.card} onChange={this.cardNumberHandler} />
						<input type="email" placeholder='e-mail' ref={this.emailRef} value={this.state.email} onChange={this.emailHandler} />
					</div>
					<label >
						<input type="checkbox" checked={this.state.checkedStatus} onChange={this.checkboxHandler} />
						check
					</label>
					<button onClick={this.checking}>Отправить</button>
				</div>

			</div>

		);
	}
}

export { App };
