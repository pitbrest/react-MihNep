import React, { useState } from 'react';
import './Search-panel.css';

function SearchPanel({ setSearchValue, searchOption, setSearchOption }) {
	const [inputSearchValue, setInputSearchValue] = useState('');

	return (
		<div className='search-container'>
			<div className='search-block pt-5 mb-3 d-flex gap-3'>
				<input
					type='text'
					placeholder='enter your request'
					className='form-control py-2 fw-medium'
					value={inputSearchValue}
					onChange={(e) => setInputSearchValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') setSearchValue(inputSearchValue);
					}}
				/>
				<button
					className='btn btn-success'
					onClick={() => setSearchValue(inputSearchValue)}>
					search
				</button>
			</div>
			<form className='filter-block d-flex gap-5 ps-2'>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='input'
						value='All'
						id='flexRadioDefault1'
						onChange={(e) => setSearchOption(e.target.value)}
						defaultChecked
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
						name='input'
						value={'Movie'}
						id='flexRadioDefault2'
						onChange={(e) => setSearchOption(e.target.value)}
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault2'>
						Movies only
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='input'
						value='Series'
						id='flexRadioDefault3'
						onChange={(e) => setSearchOption(e.target.value)}
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault3'>
						Series only
					</label>
				</div>
			</form>
		</div>
	);
}

export default SearchPanel;
