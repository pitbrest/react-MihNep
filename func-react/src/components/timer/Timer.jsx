import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';

const setDefaultTimerValue = () => {
	return localStorage.timerValue ? +localStorage.timerValue : 0;
};

function Timer() {
	const [timerValue, setTimerValue] = useState(setDefaultTimerValue());
	const [isCounting, setIsCounting] = useState(false);

	const timerIdRef = useRef(null);

	const startTimer = () => {
		setIsCounting(!isCounting);

		timerIdRef.current = setInterval(() => {
			setTimerValue((prevValue) => {
				return prevValue + 1;
			});
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(timerIdRef.current);
		setIsCounting(!isCounting);
	};

	const resetTimer = () => {
		setTimerValue(0);
	};

	useEffect(() => {
		localStorage.timerValue = timerValue;
	}, [timerValue]);

	return (
		<div className='timer-container'>
			<button
				className='btn btn-success'
				onClick={isCounting ? stopTimer : startTimer}>
				{isCounting ? 'stop' : 'start'}
			</button>
			<span className='timer rounded bg-warning'>{timerValue}</span>
			<button
				className='btn btn-danger'
				onClick={resetTimer}>
				reset
			</button>
		</div>
	);
}

export { Timer };
