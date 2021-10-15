import React, { useState, useCallback } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './Styles';

import NestedItems from './nesteditems/NestedTraits';
const Traits = (props) => {
	const [ nestListShow, setNestListHow ] = useState(false);
	const classes = useStyles();

	const nestestlistShow = useCallback(
		() => {
			setNestListHow(!nestListShow);
		},
		[ nestListShow ]
	);
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
							<span style={{ color: props.color, marginTop: '3px' }}>▽</span>
						) : (
							<span style={{ color: props.color }}>▷</span>
						)}
					</ListItemIcon>
					<ListItemText button primary={props.heading} onClick={nestestlistShow} />
				</ListItem>
			</List>
			{nestListShow ? <NestedItems listITems={props.listITems} /> : null}
		</div>
	);
};
export default React.memo(Traits);
