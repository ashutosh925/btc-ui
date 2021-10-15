import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
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
