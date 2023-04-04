import React, { useState } from 'react';
import './App.css';
import Timer from './components/timer/Timer';

function App() {
	const [isVisible, setIsVisible] = useState(false);

	const changeVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className='container-sm text-center mt-5'>
			<button
				className='btn btn-dark'
				onClick={changeVisibility}>
				Visibility toggle
			</button>
			<div className='text-center my-5'>{isVisible && <Timer />}</div>
		</div>
	);
}

export default App;
