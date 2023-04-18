import React, { useEffect, useRef, useState } from 'react';

const initValue = () => {
	const value = localStorage.getItem('count');
	return value ? +value : 0;
};

function Timer() {
	const [isCounting, setIsCounting] = useState(false);
	const [count, setCount] = useState(initValue);

	const countingStatusHandler = () => {
		setIsCounting(!isCounting);
	};

	const ref = useRef();

	const startCounting = () => {
		countingStatusHandler();
		ref.current = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
	};

	const stopCounting = () => {
		countingStatusHandler();
		clearInterval(ref.current);
	};

	const resetTimer = () => {
		return setCount(0);
	};

	useEffect(() => {
		localStorage.setItem('count', count);
	}, [count]);

	return (
		<div>
			<button
				className={
					'group rounded-xl h-10 w-20 font-semibold text-lg text-white tracking-widest relative overflow-hidden ' +
					(isCounting
						? 'bg-red-600 active:bg-red-400'
						: 'bg-teal-600 active:bg-emerald-500')
				}
				onClick={isCounting ? stopCounting : startCounting}>
				{isCounting ? 'stop' : 'start'}
				<div className='absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl'></div>
			</button>
			<button
				className='group rounded-xl h-10 w-20 font-semibold text-lg text-white tracking-widest relative overflow-hidden bg-slate-500  active:bg-slate-400 ml-2'
				onClick={resetTimer}>
				reset
			</button>
			<p className='text-center mt-10 text-2xl'>{count}</p>
		</div>
	);
}

export default Timer;
