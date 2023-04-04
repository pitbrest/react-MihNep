import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className='footer-container'>
			<span>©</span>
			<span>{new Date().getFullYear()}</span>
			<p className='p-0 m-0'>
				<a
					href='https://github.com/pitbrest'
					target='_blank'
					rel='noreferrer'>
					pitbrest
				</a>
			</p>
		</div>
	);
}

export default Footer;
