import React, { useState } from 'react';
import './Search-panel.css';

function SearchPanel({ searchValue, setSearchValue, setSearchOption }) {
	const inputSearchHandler = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className='search-container'>
			<div className='search-block pt-5 mb-3 d-flex gap-3'>
				<input
					type='text'
					placeholder='enter your request'
					className='form-control py-2 fw-medium'
					value={searchValue}
					onChange={inputSearchHandler}
				/>
				<button className='btn btn-success'>search</button>
			</div>
			<form className='filter-block d-flex gap-5 ps-2'>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault1'>
						All
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault1'>
						Movies only
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault1'>
						Series only
					</label>
				</div>
			</form>
		</div>
	);
}

export default SearchPanel;
