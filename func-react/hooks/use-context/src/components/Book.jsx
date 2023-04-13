import React, { useContext } from 'react';
import { MyContext } from './MyContext';

export function Book(props) {
	const [, handler] = useContext(MyContext);

	return (
		<div
			className='book'
			onClick={() => handler(props.id)}>
			<span key={props.id}>{props.name}</span>
			<span>{props.pages}</span>
		</div>
	);
}
