import React, { useReducer } from 'react';

const rgbHandler = (value) => {
	return value < 0 ? 0 : value > 255 ? 255 : value;
};

const reducer = (state, action) => {
	const { type, step = 50 } = action;

	switch (type) {
		case 'Dec_r':
			return {
				...state,
				r: rgbHandler(state.r - step),
			};
		case 'Inc_r':
			return {
				...state,
				r: rgbHandler(state.r + step),
			};
		case 'Dec_g':
			return {
				...state,
				g: rgbHandler(state.g - step),
			};
		case 'Inc_g':
			return {
				...state,
				g: rgbHandler(state.g + step),
			};
		case 'Dec_b':
			return {
				...state,
				b: rgbHandler(state.b - step),
			};
		case 'Inc_b':
			return {
				...state,
				b: rgbHandler(state.b + step),
			};

		default:
			return {
				...state,
			};
	}
};

function UseReducer() {
	const [state, dispatch] = useReducer(reducer, {
		r: 0,
		g: 0,
		b: 0,
	});

	const { r, g, b } = state;

	return (
		<div className='flex items-center justify-center flex-col gap-2 mt-40'>
			<h5
				className='mb-5 font-bold'
				style={{ fontSize: '36px', color: `rgb(${r}, ${g}, ${b})` }}>
				Hello useReducer()
			</h5>
			<div className='section'>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => dispatch({ type: 'Dec_r', step: 50 })}>
					-
				</button>
				<span className='px-3 py-2 bg-slate-200 m-1'>r</span>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => {
						dispatch({ type: 'Inc_r', step: 50 });
					}}>
					+
				</button>
			</div>
			<div className='section'>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => dispatch({ type: 'Dec_g' })}>
					-
				</button>
				<span className='px-3 py-2 bg-slate-200 m-1'>g</span>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => dispatch({ type: 'Inc_g' })}>
					+
				</button>
			</div>
			<div className='section'>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => dispatch({ type: 'Dec_b' })}>
					-
				</button>
				<span className='px-3 py-2 bg-slate-200 m-1'>b</span>
				<button
					className='bg-teal-400 px-3 py-2'
					onClick={() => dispatch({ type: 'Inc_b' })}>
					+
				</button>
			</div>
		</div>
	);
}

export { UseReducer };
