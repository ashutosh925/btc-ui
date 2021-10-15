import React from 'react';
import { useStyles } from './Styles';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
const InsideContent = (props) => {
	const classes = useStyles(props);
	return (
		<div>
			<Card className={classes.cardRoot} elevation={0}>
				<CardContent>
					<div className="d-flex">
						<h2 className={classes.idNumber}>#{1 + props.id}</h2>
						<div className="d-flex ms-1">
							<Avatar
								alt="Remy Sharp"
								variant="circular"
								src={props.icon}
								style={{
									width: '38px',
									height: '38px',
									transform: 'translateY(9px)',
									margin: '0px 3px'
								}}
							/>
							<div className="ms-1">
								<p className={classes.singleContentHeading}>{props.titleHeading}</p>
								<p className={classes.singleContentParagraph}>{props.subtitle}</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
export default InsideContent;
