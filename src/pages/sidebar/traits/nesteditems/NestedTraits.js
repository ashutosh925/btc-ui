import React from 'react';
import { useStyles } from './Styles';
const NestedTraits = (props) => {
	const classes = useStyles();
	return (
		<div>
			{props.listITems &&
				props.listITems.map((items, idx) => {
					return (
						<div key={idx}>
							<div className={classes.nestListItem}>
								<div className={classes.nestedChild1}>
									<p className="text-start ms-1">{items.list1}</p>
								</div>
								<div className={classes.nestedChild2}>
									<p>{items.list2}</p>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};
export default React.memo(NestedTraits);
