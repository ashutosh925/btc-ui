import React, { useContext, useState, useCallback } from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';
import { Button } from '@material-ui/core';
import SettingsButtons from './SettingsButtons';

const Ranking = () => {
	const classes = useStyles();
	const [ btnShow, setBtnShow ] = useState(false);
	const [ rankingNotes, setRankingNotes ] = useState(false);
	const { 0: darkMode } = useContext(ThemeContext);
	const settingsBtnShow = useCallback(
		() => {
			setBtnShow(!btnShow);
		},
		[ btnShow ]
	);
	const showRankingNotes = () => {
		setRankingNotes(!rankingNotes);
	};

	return (
		<div>
			<br />
			<p className={classes.warningMsg}>Ranking Method Preset</p>
			<ButtonComponent
				description="rarity.tools.experiment"
				padding="0px 6px"
				width="180px"
				borderRadius="6px"
				color="#FFFFFF"
				bgColor="#BE185D"
				border="none"
				height="26px"
				bgcolorHover="rgb(167 18 80)"
			/>
			<div className="d-flex mt-3">
				<Button disableRipple elevation={0} onClick={settingsBtnShow} className={classes.toggleButtons}>
					<span style={{ color: darkMode ? '#FFFFF' : ' #DB2777' }}>
						{btnShow ? <span>▽</span> : <span>▷</span>} Settings
					</span>
				</Button>

				<br />
			</div>
			<div>{btnShow ? <SettingsButtons /> : null}</div>
			<div className="d-flex">
				<Button disableRipple elevation={0} onClick={showRankingNotes} className={classes.toggleButtons}>
					<p className={`${classes.descriptionWarning} me-2`}>
						Primate Social Society Official Ranking Notes
					</p>
					<p className="me-2" style={{ color: darkMode ? '#FFFFF' : ' #DB2777' }}>
						▷
					</p>
					<p className={classes.descriptionParagraph}>
						{rankingNotes ? null : 'Rankings may change! Read More...'}
					</p>
				</Button>
				<br />
			</div>
			{rankingNotes ? <p>[2021/09/23] Rankings may change!</p> : null}
			{rankingNotes ? (
				<p className="text-muted">
					First version of rankings have been added. Please note that while the rankings are still new they
					might be subject to change!
				</p>
			) : null}
		</div>
	);
};
export default React.memo(Ranking);
