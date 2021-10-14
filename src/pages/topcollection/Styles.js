import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	singleContentRoot: (props) => ({
		padding: '5px',
		borderRadius: '5px',
		border: '1px solid #d4d4d4',
		boxShadow: '0px 0px 7px -3px rgba(0,0,0,0.34)'
	}),
	cardRoot: (props) => ({
		minWidth: 300,
		background: props.darkTheme ? '#1F2937' : '#FFFFFF'
	}),
	heading: {
		color: '#DB2777',
		fontSize: '25px',
		fontWeight: 900
	},
	singleContentHeading: {
		color: '#DB2777',
		fontSize: '18px',
		fontWeight: 900,
		margin: '0px !important'
	},
	singleContentParagraph: {
		color: '#9CA3AF',
		margin: '0px !important',
		fontSize: '14px '
	},
	idNumber: {
		color: '#9CA3AF',
		fontWeight: 900,
		fontSize: '30px',
		transform: 'translateY(10px)'
	},
	singleContentHeadingMain: {
		color: '#DB2777',
		fontSize: '20px',
		fontWeight: 900,
		margin: '2px 10px'
	}
}));
