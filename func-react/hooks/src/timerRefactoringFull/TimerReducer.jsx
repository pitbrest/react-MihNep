const timerReducer = (state, action) => {
	const { type } = action;

	switch (type) {
		case 'START':
			return { ...state, isCounting: true };
		case 'STOP':
			return { ...state, isCounting: false };
		case 'RESET':
			return { ...state, count: 0 };
		case 'TICK':
			return { ...state, count: state.count + 1 };
		default:
			return {
				...state,
			};
	}
};

export { timerReducer };
