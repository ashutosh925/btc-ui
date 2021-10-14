import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {
		margin: '20px 0px 0px 0px'
	},
	heading: {
		color: '#BE185D',
		fontSize: '35px',
		fontWeight: 900
	},
	gridParent: {
		margin: '20px 0px'
	},
	cardHeading: {
		padding: '5px !important',
		color: '#BE185D',
		fontSize: '24px',
		fontWeight: 900
	},
	rootCard: (props) => ({
		width: 300,
		padding: '0px !important',
		margin: '8px',
		background: props.darkTheme ? '#1F2937' : '#FFFFFF',
		boxShadow: '0px 0px 7px -3px rgba(0,0,0,0.34)',
		transition: 'all 0.2s ease-in'
	}),
	CardImg: {
		height: '100%'
	},
	cardMedia: (props) => ({
		backgroundImage: `url(${props.img})`,
		backgroundRepeat: 'no-repeat',
		backgroundPoistion: 'center',
		backgroundSize: 'auto',

		height: 200
	}),
	cardtop: {
		padding: '5px !important',
		color: '#9CA3AF',
		fontSize: '12px',
		margin: '5px 0px',
		textDecoration: 'none',
		'&:hover': {
			color: '#9CA3AF',
			cursor: 'pointer'
		}
	},
	cardBttom: {
		color: '#DB2777',
		padding: '5px !important'
	}
}));
