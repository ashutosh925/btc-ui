import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	//leftSide modal
	cardId: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '16px'
	},
	cardImg: {
		height: '100%',
		width: '100%',
		borderRadius: '5px'
	},
	cardtop: {
		color: '#DB2777',
		fontSize: '14px',
		textDecoration: 'none',

		'&:hover': {
			color: '#DB2777'
		}
	},
	cardBttom: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '17px'
	},
	//card
	rootCard: (props) => ({
		width: 270,
		margin: '6px',
		padding: '10px !important',
		background: 'golden',
		boxShadow: '0px 0px 7px -3px rgba(0,0,0,0.34)',
		transition: 'all 0.2s ease-in',
		border: '1px solid rgb(148, 148, 148)',
		[theme.breakpoints.down('600')]: {
			width: 'auto%'
		}
	}),
	media: {
		height: 160,
		borderRadius: '5px'
	},
	modalButton: {
		background: 'transparent',
		border: '1px solid black',
		width: '80%',
		borderRadius: '10px',
		height: '45px',
		margin: '10px 0px',
		boxShadow: '0px 0px 7px -3px rgba(0,0,0,0.34)'
	},
	buttnoText: {
		fontWeight: 600,
		fontSize: '18px'
	},
	//Right side modal
	cardRightroot: {},
	rarityHead: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '70px',
		width: '80%',
		margin: 'auto',
		background: '#BE185D',
		borderRadius: '7px',
		'& h5': {
			color: '#FFFFFF',
			fontSize: '16px',
			fontWeight: 600
		},
		'& p': {
			background: '#FFFFFF',
			width: '95%',
			margin: 'auto',
			borderRadius: '5px',
			color: 'green',
			textAlign: 'center'
		},
		'& span': {
			fontSize: '13px',
			color: '#9CA3AF'
		}
	},

	nestListItem: {
		display: 'flex',
		justifyContent: 'between',
		background: '#9CA3AF ',
		alignItems: 'center',
		borderRadius: '5px',
		height: '25px',
		padding: '5px',
		margin: '2px 0px'
	},
	nestedChild1: {
		height: '23px',
		flexBasis: '80%',
		color: 'black',

		'& p': {
			color: '#FFFFFF ',
			fontSize: '15px',
			lineHeight: '15px'
		}
	},
	nestedChild2: {
		borderRadius: '5px',
		backgroundColor: '#FFFFFF',
		flexBasis: '20%',
		height: '18px',
		padding: '0px 5px',
		'& p': {
			color: '#9CA3AF!important',
			lineHeight: '17px'
		}
	},
	ahrefTrue: {
		color: '#BE185D',
		textDecoration: 'none',
		fontWeight: '900',
		fontSize: '16px',
		margin: '0px 3px',
		'&:hover': {
			color: '#BE185D'
		}
	},
	ahrefFalse: {
		color: '#BE185D',
		fontSize: '16px',
		margin: '0px 3px',
		'&:hover': {
			color: '#BE185D'
		}
	},
	scoreHeading: {
		color: '#DB2777',
		fontSize: '15px',
		fontWeight: 600
	},
	scoreNumbers: {
		color: '#10B981',
		fontSize: '18px'
	}
}));
