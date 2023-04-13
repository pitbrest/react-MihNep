import React, { useState } from 'react';

export const MyContext = React.createContext();

export function ItemsWithContext(props) {
	const [items, setItems] = useState({
		books: [
			{ id: 1, name: 'birds', pages: '55' },
			{ id: 2, name: 'sun', pages: '97' },
		],
		songs: [
			{ id: 3, name: 'someSong' },
			{ id: 4, name: 'anotherSong' },
		],
	});

	const deleteBook = (id) => {
		setItems({ ...items, books: items.books.filter((book) => book.id !== id) });
	};

	return (
		<MyContext.Provider value={(items, deleteBook)}>
			{props.children}
		</MyContext.Provider>
	);
}
