import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		height: '20px'
	},
	appBar: {
		height: '40px',
		backgroundColor: '#1F2937'
	},
	buttonText: {
		fontWeight: 900,
		fontSize: '16px',
		color: 'white',
		letterSpacing: '0px'
	},
	gridParent: {
		height: '100%'
	},
	socialTwitter: {
		height: '17px',
		width: '20px',
		margin: '0px 5px'
	},
	socialMedium: {
		height: '12px',
		width: '17px'
	},
	ahrefLinks: {
		height: '100%',
		textDecoration: 'none',
		color: '#9CA3AF',
		display: 'inline-block',
		'& span': {
			fontWeight: 600,

			color: '#9CA3AF',
			fontSize: '14px',
			margin: '0px 5px',
			'&::after': {
				content: '""',
				borderRight: '1px solid #524f4f',
				padding: '3px 5px',
				height: '80px',
				width: '100px'
			},
			'&:hover': {
				color: '#FFB2D1 !important'
			}
		}
	},

	ahrefLinks2: {
		textDecoration: 'none',
		color: '#9CA3AF',
		display: 'inline-block',
		margin: '0px 10px',
		'& span': {
			fontWeight: 600,
			color: '#9CA3AF',
			fontSize: '14px'
		},
		'&:hover': {
			color: '#FFB2D1 !important'
		}
	},
	rightAhrefLinksFirstBorder: {
		textDecoration: 'none',
		color: '#9CA3AF',
		display: 'inline-block',
		margin: '0px 7px',

		'& span': {
			fontWeight: 600,
			color: '#9CA3AF',
			fontSize: '14px'
		},
		'&:hover': {
			color: '#FFB2D1 !important'
		},
		'&::before': {
			content: '""',
			borderLeft: '1px solid #524f4f',
			height: '80px',
			width: '100px',
			paddingRight: '10px'
		}
	},

	AllCollectionSvg: {
		width: '20px',
		height: '20px',
		transform: 'translateY(4px)'
	},
	spanNEw: {
		color: '#ffc93f',
		margin: '0px 10px'
	},
	darkThemeBtn: {
		backgroundColor: 'transparent',
		border: 'none'
	}
}));
