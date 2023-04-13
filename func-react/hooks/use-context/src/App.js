import React from 'react';

import './App.css';
import { ItemsWithContext } from './components/MyContext';
import { Books } from './components/Books';

function App() {
	return (
		<>
			<div className='App'>Hello</div>
			<ItemsWithContext>
				<Books />
			</ItemsWithContext>
		</>
	);
}

export default App;
