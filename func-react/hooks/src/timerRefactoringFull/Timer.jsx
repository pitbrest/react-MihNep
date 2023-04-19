import React, { useEffect, useReducer } from 'react';
import { timerReducer } from './TimerReducer';

const initValue = () => {
	const value = localStorage.getItem('count');
	return value ? +value : 0;
};

function Timer() {
	const [state, dispatch] = useReducer(timerReducer, {
		count: initValue(),
		isCounting: false,
	});

	const { count, isCounting } = state;

	useEffect(() => {
		localStorage.setItem('count', count);
	}, [count]);

	useEffect(() => {
		let timer = null;

		if (isCounting) {
			timer = setInterval(() => {
				dispatch({ type: 'TICK' });
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [isCounting]);

	return (
		<div>
			<button
				className={
					'group rounded-xl h-10 w-20 font-semibold text-lg text-white tracking-widest relative overflow-hidden ' +
					(isCounting
						? 'bg-red-600 active:bg-red-400'
						: 'bg-teal-600 active:bg-emerald-500')
				}
				onClick={() =>
					isCounting ? dispatch({ type: 'STOP' }) : dispatch({ type: 'START' })
				}>
				{isCounting ? 'stop' : 'start'}
				<div className='absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl'></div>
			</button>
			<button
				className='group rounded-xl h-10 w-20 font-semibold text-lg text-white tracking-widest relative overflow-hidden bg-slate-500  active:bg-slate-400 ml-2'
				onClick={() => dispatch({ type: 'RESET' })}>
				reset
			</button>
			<p className='text-center mt-10 text-2xl'>{count}</p>
		</div>
	);
}

export default Timer;
