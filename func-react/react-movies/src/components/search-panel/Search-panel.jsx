import React from 'react';
import './Search-panel.css';

function SearchPanel() {
	return (
		<div className='search-container'>
			<div className='search-block pt-5 mb-3 d-flex gap-3'>
				<input
					type='text'
					placeholder='enter your request'
					className='form-control py-2 fw-medium'
				/>
				<button className='btn btn-success'>search</button>
			</div>
			<form className='filter-block d-flex gap-5 ps-2'>
				<div class='form-check'>
					<input
						class='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						class='form-check-label'
						for='flexRadioDefault1'>
						All
					</label>
				</div>
				<div class='form-check'>
					<input
						class='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						class='form-check-label'
						for='flexRadioDefault1'>
						Movies only
					</label>
				</div>
				<div class='form-check'>
					<input
						class='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault1'
					/>
					<label
						class='form-check-label'
						for='flexRadioDefault1'>
						Series only
					</label>
				</div>
			</form>
		</div>
	);
}

export default SearchPanel;
