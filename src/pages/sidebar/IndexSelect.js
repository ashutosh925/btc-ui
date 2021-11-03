import React, { useContext } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ThemeContext } from '../../ThemeContext';

import { useStyles } from './Styles';
import './Override.css';
import { useSelector } from 'react-redux';
const IndexSelect = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const menuItems = [
		{
			listItem: 'ten',
			value: 'ten'
		},
		{
			listItem: 'Twenty',
			value: 'Twenty'
		},
		{
			listItem: 'Thirty',
			value: 'Thirty'
		}
	];
	const classes = useStyles();

	const projectReducer = useSelector((state) =>  state.projectReducer);
	const {loading , projects } =projectReducer;
	const currentProject = JSON.parse(localStorage.getItem("currentProject"));
	return (
		<div>
			<FormControl className={classes.formControl} style={{ background: 'red' }}>
				<Select className={classes.SelectInput} label="Project" style={{ background: darkMode ? '#374151' : 'white' }} value={currentProject.project_name}>
					{projects &&
						projects.map((items, idx) => {
							return (
									<MenuItem key={idx} value={items.project_name}>
										<span style={{ color: darkMode ? '#9CA3AF' : 'black' }}>{items.project_name}</span>
									</MenuItem>
							);
						})}
				</Select>
			</FormControl>
		</div>
	);
};
export default React.memo(IndexSelect);
