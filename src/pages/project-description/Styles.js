import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		margin: 'auto'
	},
	bannerImg: {
		height: '100%',
		width: '100%'
	},
	imgParentDiv: {
		height: '250px',
		width: '100%'
	},
	descriptionHeading: {
		color: '#DB2777',
		fontSize: '18px',
		fontWeight: 900,
		'&::after': {
			content: '"s"',
			borderBottom: '1px solid #524f4f',
			padding: '3px 5px',
			height: '80px',
			width: '100px'
		}
	},
	adHeading: {
		color: '#DB2777',

		fontWeight: 900
	},
	warningMsg: {
		color: '#DB2777',
		fontSize: '20px',
		fontWeight: 900
	},
	descriptionWarning: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '17px'
	},
	descriptionParagraph: {
		color: '#9CA3AF',
		fontSize: '15px'
	},
	socialIcons: {
		width: '15px',
		height: '15px'
	},
	socialAHrefs: {
		TextDecoration: 'none',
		fontSize: '14px',
		color: '#9CA3AF',
		margin: '0px 10px'
	},
	paraRightSectionH: {
		color: '#DB2777',
		fontSize: '17px',
		fontWeight: 900
	},
	//sorting
	sortingTitle: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '17px'
	},
	SelectInput: {
		width: '100px !important',
		borderRadius: '10px',
		borderColor: '#525252',
		'&:before': {
			borderColor: 'transparent !important'
		},
		'&:after': {
			borderColor: 'transparent !important'
		}
	},
	settingButton: {
		background: 'none',
		width: '100px'
	},
	toggleButtons: {
		'&:hover': {
			backgroundColor: 'transparent !important'
		}
	}
}));
