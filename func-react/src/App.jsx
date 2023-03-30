import React, { useState } from 'react';
import './App.css';
import { Clicker } from './components/clicker/Clicker';

function App() {
	const [isClicker, setIsClicker] = useState(false);

	const isClickerHandler = () => {
		setIsClicker(!isClicker);
	};

	return (
		<div className='container-sm'>
			<div className='text-center my-5'>
				<button
					className='btn btn-success my-3'
					onClick={isClickerHandler}>
					Handler
				</button>
				{isClicker && <Clicker />}
			</div>
		</div>
	);
}

export default App;
