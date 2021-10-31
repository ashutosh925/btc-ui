import React, { useContext, useEffect } from 'react';
import Sidebar from '../../pages/sidebar/Index';
import TopBar from '../../pages/topbar/Index';
import { Grid } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';
import ProjectDescription from '../../pages/project-description/Index';
import { listNft } from '../../redux/actions/nftactions'
import { useDispatch, useSelector } from 'react-redux'
import { listProject } from '../../redux/actions/projectActions'
import cokie from 'js-cookie';

const Container = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const dispatch = useDispatch()
	const state = useSelector((state) => state.nftReducer);
	const currentProject = JSON.parse(localStorage.getItem("currentProject"));
	useEffect(() => {
		if(!state.currentProject){
			dispatch({ type: 'CURRENT_PROJECT', payload: currentProject });
			dispatch(listProject({}))
		}
		dispatch(listNft({project_id: state.currentProject ? state.currentProject._id : currentProject._id}));
	}, []);
	return (
		<div>
			<TopBar />
			<br />
			<Grid container direction="row" justifyContent="center">
				<Grid item xs={8} sm={4} md={4} lg={2} xl={2}>
					<Sidebar darkTheme={darkMode} />
				</Grid>
				<Grid item sm={12} md={12} lg={10} xl={10}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};
export default Container;
