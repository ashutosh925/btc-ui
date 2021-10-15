const initialState = {
	modelOpen: false,
	id: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET ID':
			return {
				...state,
				id: action.payload
			};
		case 'MODAL OPEN':
			console.log('from reducer');
			return {
				...state,
				modelOpen: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
