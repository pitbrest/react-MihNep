import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';

const applyDefaultTimerValue = () => {
	return localStorage.timerCountValue ? +localStorage.timerCountValue : 0;
};

export default function Timer() {
	const [count, setCount] = useState(applyDefaultTimerValue());
	const [isCounting, setIsCounting] = useState(false);

	const timerRef = useRef(null);

	const countingStatusHandler = () => setIsCounting(!isCounting);

	const startTimer = () => {
		countingStatusHandler();

		timerRef.current = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(timerRef.current);
		countingStatusHandler();
	};

	const resetTimer = () => {
		setCount(0);
	};

	useEffect(() => {
		localStorage.timerCountValue = count;
	}, [count]);

	useEffect(() => {
		return () => clearInterval(timerRef.current);
	}, []);

	return (
		<div className='timer-container'>
			<button
				className={isCounting ? 'btn btn-danger' : 'btn btn-success'}
				onClick={isCounting ? stopTimer : startTimer}>
				{isCounting ? 'stopTimer' : 'startTimer'}
			</button>
			<span className='timer p-3 m-3 border border-2  border-primary'>
				{count}
			</span>
			<button
				className='btn btn btn-warning'
				onClick={resetTimer}>
				reset
			</button>
		</div>
	);
}
