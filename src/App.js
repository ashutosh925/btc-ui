import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './container/projectNft/Index';
import { ThemeContext } from './ThemeContext';
const App = () => {
	const [ darkMode, setDarkMode ] = useState(false);

	return (
		<div className="App">
			<ThemeContext.Provider value={[ darkMode, setDarkMode ]}>
				<Container />
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
