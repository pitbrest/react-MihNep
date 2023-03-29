import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const inc = () => setCount(count + 1);
	const dec = () => setCount(count - 1);

	return (
		<div className='content'>
			<button
				className='inc'
				onClick={dec}>
				-
			</button>
			<div className='count'>{count}</div>
			<button
				className='dec'
				onClick={inc}>
				+
			</button>
		</div>
	);
}

export default App;
