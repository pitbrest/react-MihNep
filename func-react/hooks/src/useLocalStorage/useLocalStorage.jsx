import { useEffect, useState } from 'react';

function useLocalStorage(initialState, key) {
	const getValue = () => {
		const value = localStorage.getItem(key);
		return value ? +value : initialState;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
}

export { useLocalStorage };
