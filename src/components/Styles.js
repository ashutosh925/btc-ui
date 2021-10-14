import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, props) => ({
	//button
	button: (props) => ({
		border: props.border,
		padding: props.padding,
		letterSpacing: '1px',
		width: props.width,
		borderRadius: props.borderRadius,
		fontSize: props.fontSize,
		backgroundColor: props.bgColor,
		color: props.color,
		fontWeight: 400,
		margin: props.margin,
		height: props.height,

		'&:hover': {
			// backgroundColor: 'rgb(167 18 80)'
			backgroundColor: props.bgcolorHover
		}
	}),

	//input
	inputRoot: (props) => ({
		width: props.width
	}),

	input: (props) => ({
		borderRadius: 8,
		width: '90%',
		position: 'relative',
		border: '1px solid black',
		fontSize: 16,
		color: props.valueColor,
		height: '24px',
		margin: '0px auto',
		borderColor: '#525252',
		backgroundColor: props.bgColor,
		padding: '2px 5px',
		'&::placeholder': {
			fontSize: '14px',
			// color: '#BE185D',
			textAlign: 'center',
			color: props.pColor
		},
		'&:focus ': {
			outline: 'none'
		}
	})
}));
