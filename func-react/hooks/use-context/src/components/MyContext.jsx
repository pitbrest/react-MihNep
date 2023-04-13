import React, { createContext, useState } from 'react';

export const myContext = createContext();

export function ElWithContext(props) {
	const [books, setBooks] = useState([
		{ id: 1, name: 'Black Jack', year: 1999 },
		{ id: 2, name: 'King Artur', year: 2022 },
		{ id: 3, name: 'Sun Rise', year: 1852 },
		{ id: 4, name: 'Good Morning', year: 1685 },
		{ id: 5, name: 'My Birthday', year: 1988 },
	]);

	const addBook = (book) => {
		setBooks([...books, book]);
	};
	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};

	const value = {
		books,
		addBook,
		removeBook,
	};

	return (
		<myContext.Provider value={value}>{props.children}</myContext.Provider>
	);
}
