import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './Styles';
import TraitLinks from './TraitContent';

const Traits = (props) => {
	// const [ contentItems, setContentItems ] = useState(TraitLinks);

	// const styles = {
	// 	root: {
	// 		minWidth: '0px'
	// 	}
	// };
	const classes = useStyles();
	return (
		<div>
			<h4 className={classes.traits}>Traits</h4>
			<List disablePadding={true} className={classes.listParent}>
				{TraitLinks &&
					TraitLinks.map((items, idx) => {
						return (
							<div key={idx}>
								<ListItem button alignItems="start" disableGutters={true}>
									<ListItemIcon>
										<span style={{ color: props.color }}>{items.icontrue}</span>
									</ListItemIcon>

									<ListItemText primary={items.name} />
								</ListItem>
							</div>
						);
					})}
			</List>
		</div>
	);
};
export default Traits;
