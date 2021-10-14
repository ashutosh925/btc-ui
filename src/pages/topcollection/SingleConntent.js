import React, { useContext } from 'react';
import { useStyles } from './Styles';
import { content1, content2, content3, content4 } from './Content';
import InsideContent from './InsideContent';
import { ThemeContext } from '../../ThemeContext';
const SingleContent = (props) => {
	const { 0: darkMode, 1: setDarkMode } = useContext(ThemeContext);

	const classes = useStyles();
	return (
		<div className={classes.singleContentRoot}>
			<h1 className={classes.singleContentHeadingMain}>{props.topHeading}</h1>
			{content1 &&
				content1.map((items, idx) => {
					return (
						<div>
							<InsideContent
								id={idx}
								icon={items.icon}
								titleHeading={items.title}
								subtitle={items.subtitle}
								darkTheme={darkMode}
							/>
						</div>
					);
				})}
			{/* <InsideContent /> */}
			{/* <InsideContent /> */}
		</div>
	);
};
export default SingleContent;
