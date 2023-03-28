import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
	state = {
		visible: true,
	};

	btnHandler = () => {
		this.setState((prevState) => {
			return {
				visible: !prevState.visible,
			};
		});
	};

	render() {
		return (
			<div
				className='modal-wrapper'
				style={{ visibility: this.state.visible ? 'visible' : 'hidden' }}>
				<div className='modal-content'>
					<p className='modal-message'>{this.props.message}</p>
					<button onClick={this.btnHandler}>close</button>
				</div>
			</div>
		);
	}
}

export { Modal };
