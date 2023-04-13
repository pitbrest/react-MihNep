import React from 'react';

export function Book(props) {
	return (
		<>
			<h5 key={props.id}>{props.name}</h5>
			<p>{props.pages}</p>
		</>
	);
}
