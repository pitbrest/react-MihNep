import React, { useState } from 'react';
import './App.css';
import { Timer } from './components/timer/Timer';

function App() {
	const [isVisible, setIsVisible] = useState(false);

	const visibilityHandler = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div className='container-sm'>
			<div className='text-center my-5'>
				<button
					className='btn btn-primary my-3'
					onClick={visibilityHandler}>
					timer toggle
				</button>

				{isVisible && <Timer />}
			</div>
		</div>
	);
}

export default App;
