import React, { useState, useCallback, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './Styles';
import { useSelector, useDispatch } from 'react-redux';

import NestedItems from './nesteditems/NestedTraits';
import Axios from 'axios';
const Traits = (props) => {
	const [ nestListShow, setNestListHow ] = useState(false);
	const [nestedLists, setNestedLists] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch()
	const state = useSelector((state) => state.nftReducer);
	const nestestlistShow = (type) => {
		setNestListHow(!nestListShow);
		let filterList = props.listITems.filter(element => 
			element.type === type
		)
		setNestedLists(filterList)
	}


	return (
		<div>
			<List disablePadding={true} className={classes.listParent}>
				<ListItem
					button
					alignItems="start"
					disableGutters={true}
					disableRipple
					disableTouchRipple
					disableFocusRibble
				>
					<ListItemIcon>
						{nestListShow ? (
							<span style={{ color: props.color, marginTop: '3px' }} onClick={()=>nestestlistShow(props.heading)}>▽</span>
						) : (
							<span style={{ color: props.color }} onClick={()=>nestestlistShow(props.heading)}>▷</span>
						)}
					</ListItemIcon>
					<ListItemText button primary={props.heading} onClick={()=>nestestlistShow(props.heading)} />
				</ListItem>
			</List>
			{nestListShow ? <NestedItems listITems={nestedLists} selectedTrait={(trait)=>props.selectedTrait(trait)}/> : null}
		</div>
	);
};
export default React.memo(Traits);
