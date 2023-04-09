import React from 'react';

function Spinner() {
	return (
		<div
			className='spinner-border text-success text-center'
			role='status'
			style={{
				margin: '5rem auto 0 auto',
				display: 'flex',
				width: '3rem',
				height: '3rem',
			}}>
			<span className='visually-hidden bg-danger'>Loading...</span>
		</div>
	);
}

export default Spinner;
