import React, { useContext } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ThemeContext } from '../../ThemeContext';

import { useStyles } from './Styles';
import './Override.css';
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
	
	return (
		<div>
			<FormControl className={classes.formControl} style={{ background: 'red' }}>
				<Select className={classes.SelectInput} style={{ background: darkMode ? '#374151' : 'white' }}>
					{menuItems &&
						menuItems.map((items, idx) => {
							return (
								<div key={idx}>
									<MenuItem value={items.value}>
										<span style={{ color: darkMode ? '#9CA3AF' : 'black' }}>{items.listItem}</span>
									</MenuItem>
								</div>
							);
						})}
				</Select>
			</FormControl>
		</div>
	);
};
export default React.memo(IndexSelect);
