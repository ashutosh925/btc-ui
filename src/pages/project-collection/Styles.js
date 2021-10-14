import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	cardId: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '20px'
	},
	cardImg: {
		height: '100%',
		width: '100%'
	},
	cardtop: {
		color: '#DB2777',
		fontSize: '14px',
		textDecoration: 'none'
	},
	cardBttom: {
		color: '#DB2777',
		fontWeight: 900,
		fontSize: '17px'
	},
	//card
	rootCard: (props) => ({
		width: 190,
		margin: '6px',
		// background: '#1F2937',
		background: props.darkTheme ? '#1F2937' : '#FFFFFF',
		boxShadow: '0px 0px 7px -3px rgba(0,0,0,0.34)',
		transition: 'all 0.2s ease-in',
		'&:hover': {
			transform: 'translateY(-7px)',
			border: `1px solid ${props.darkTheme ? '#FFFFFF' : 'black'}`
		}
	}),
	media: {
		height: 160,
		borderRadius: '5px'
	}
}));
