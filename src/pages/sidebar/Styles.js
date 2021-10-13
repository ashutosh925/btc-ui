import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	//parent sidebar

	root: {
		width: '100%',
		padding: '10px 10px',
		textAlign: 'center',
		marginTop: '10px ',
		overflowY: 'scroll',
		height: '100vh',
		'&::-webkit-scrollbar': {
			width: '0.9em'
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			outline: '1px solid slategrey'
		},
		[theme.breakpoints.down('1000')]: {
			width: '60%',
			margin: 'auto',
			overflowY: 'hidden',
			height: '100%'
		}
	},
	headingProject: (props) => ({
		// color: '#BE185D',
		color: props.darkTheme ? '#D1D5DB' : '#BE185D',
		fontSize: '25px',
		textAlign: 'center',
		padding: '5px 0px',
		fontWeight: '900'
	}),
	formControl: {
		width: '90%'
	},
	SelectInput: {
		borderColor: '#525252',
		'&:before': {
			borderColor: 'transparent !important'
		},
		'&:after': {
			borderColor: 'transparent !important'
		}
	},
	//item filter
	itemFilterHeading: (props) => ({
		fontSize: '23px',
		fontWeight: 900,
		margin: '0px'
	}),
	listingType: {
		fontWeight: 900,
		fontSize: '17px',
		color: '#DB2777'
	},
	price: {
		fontWeight: 900,
		fontSize: '17px',
		color: '#DB2777'
	},
	priceSubHeading: {
		color: '#DB2777',
		fontSize: '17px'
	},
	//trait filter
	checkBoxLabel: {
		fontSize: '17px',
		// color: '#9CA3AF',
		fontWeight: 900,
		lineHeight: '10px'
	},
	//traits
	traits: {
		width: '100%',
		margin: '15px 0px 0px 10px',
		fontWeight: 900,
		color: '#BE185D',
		textAlign: 'start',

		'&::after': {
			content: '""',
			display: 'block',
			width: '100%',
			paddingBottom: '5px',
			borderBottom: '1px solid #c9c3c3'
		}
	},
	listParent: {
		margin: '0px 0px 0px 10px !important'
	}
}));
