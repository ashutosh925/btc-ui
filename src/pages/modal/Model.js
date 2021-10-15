import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		overflowY: 'auto !important',
		height: '90vh',
		width: '50%',
		[theme.breakpoints.down('800')]: {
			width: 'auto'
		},
		backgroundColor: theme.palette.background.paper,
		border: '3px solid #DB2777',
		outline: 'none',
		borderRadius: '7px',
		padding: theme.spacing(3, 4, 3),
		'&::-webkit-scrollbar': {
			width: '0.4em'
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			outline: '1px solid slategrey'
		}
	}
}));

export default function SimpleModal() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.auth);
	const modalstate = state.modelOpen;
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);
	const [ open, setOpen ] = React.useState(modalstate);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		dispatch({ type: 'MODAL OPEN', payload: false });
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<Card />
		</div>
	);
	return (
		<div>
			<Modal
				open={modalstate}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}
