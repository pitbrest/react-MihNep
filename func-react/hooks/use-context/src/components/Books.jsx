import React, { useContext } from 'react';
import { MyContext } from './MyContext';
import { Book } from './Book';

export function Books() {
	const [items] = useContext(MyContext);

	return (
		<>
			{items.books.map((i) => (
				<Book
					key={i.id}
					{...i}
				/>
			))}
		</>
	);
}
