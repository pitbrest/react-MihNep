import React from 'react';
import './App.css';

import { ElWithContext } from './components/MyContext';
import { Books } from './components/Books';

function App() {
	return (
		<div className='max-w-2xl mx-auto'>
			<ElWithContext>
				<Books />
			</ElWithContext>
		</div>
	);
}

export default App;
