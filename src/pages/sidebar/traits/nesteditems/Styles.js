import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	root: {},
	nestListItem: {
		display: 'flex',
		justifyContent: 'between',
		background: '#9CA3AF ',
		borderRadius: '5px',
		height: '27px',
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
		backgroundColor: '#E5E7EB',
		flexBasis: '20%',
		height: '18px',
		padding: '0px 5px',
		'& p': {
			color: '#BE185D !important',
			lineHeight: '17px'
		}
	}
}));
