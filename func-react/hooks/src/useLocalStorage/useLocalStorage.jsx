import { useEffect, useState } from 'react';

function UseLocalStorage(initValue, key) {
	const getValue = () => {
		const LSvalue = localStorage.getItem(key);
		return LSvalue ? +LSvalue : initValue;
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, value);
	});

	return [value, setValue];
}

export { UseLocalStorage };
