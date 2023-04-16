import React, { useContext } from 'react';
import { myContext } from './MyContext';
import { Book } from './Book';

export function Books() {
	const { books } = useContext(myContext);

	return (
		<div className='flex justify-center align-middle flex-wrap gap-4 mt-20'>
			{books.map((book) => (
				<Book
					key={book.id}
					{...book}
				/>
			))}
		</div>
	);
}
