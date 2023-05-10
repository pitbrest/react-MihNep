import { WithContext } from './context/context';
import './App.css';

import Header from './components/Header';
import Shop from './components/shop/Shop';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<WithContext>
				<Shop />
			</WithContext>
			<Footer />
		</>
	);
}

export default App;
