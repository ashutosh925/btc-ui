import './App.css';
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './container/projectNft/Index';
import { ThemeContext } from './ThemeContext';
import Projects from "./container/project/index";
import SignIn from "./container/signIn/signIn"

const App = () => {
	// const [ darkMode, setDarkMode ] = useState(false);
	const [darkMode, setDarkMode] = useState();
	const [isTopBarActive, setIsTopBarActive] = useState(false);
	const [adminTopBarActive, setAdminTopBarActive] = useState(true);
	const [adminSideNavActive,setAdminSideNavActive] = useState(); 
	return (
		<div className="App">
			<ThemeContext.Provider value={[ darkMode, setDarkMode ]}>
				<Router>
					<Switch>
					<Route path="/nfts">
							<Container />
					</Route>
					<Route path="/admin">
							<SignIn />
					</Route>						
						{/* <Route path="/Admin/Projects">
							<AdminProjectList />
						</Route> */}
						{/* <Route path="/Admin/AddProjects">
							<AdminAddProject />
						</Route>
						<Route path="/Admin/ProjectsNftList">
							<AdminProjectNftList />
						</Route>
						<Route path="/Admin/AddProjectsNft">
							<AdminAddProjectNft />
						</Route> */}
						<Route path="/">
							<Projects />
						</Route>
					</Switch>
				</Router>

			</ThemeContext.Provider>
		</div>
	);
};

export default App;
