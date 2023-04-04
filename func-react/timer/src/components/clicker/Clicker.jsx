import React, { useEffect, useState } from 'react';

function Clicker() {
	const [count, setCount] = useState(0);

	const inc = () => {
		setCount(count + 1);
	};
	const dec = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		console.log('clicker did mount');
		return () => console.log('clicker will unmount');
	}, [count]);

	return (
		<div>
			<button
				className='btn btn-danger'
				onClick={dec}>
				-
			</button>
			<span className='m-3'>{count}</span>
			<button
				className='btn btn-danger'
				onClick={inc}>
				+
			</button>
		</div>
	);
}

export { Clicker };
