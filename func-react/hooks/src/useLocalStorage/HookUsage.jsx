import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function HookUsage() {
	const [count, setCount] = useLocalStorage(0, 'count');

	return (
		<div>
			<button
				className='rounded-xl bg-blue-500 px-10 py-3 text-base mb-3 font-medium 
        text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700'
				onClick={() => setCount(count + 1)}>
				update
			</button>
			<p className='font-medium'>
				Current <span className='ml-7'>{count}</span>
			</p>
			<p className='font-medium'>
				Previous <span className='ml-5'></span>
			</p>
		</div>
	);
}

export { HookUsage };
