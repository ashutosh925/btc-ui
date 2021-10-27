const initialState = {
	modelOpen: false,
	projectModal: false,
	projectNFTModal: false,
	id: 0,
	editProjectModal:false

};

const reducer = (state = initialState, action) => {
console.log(action.type);
	switch (action.type) {
		case 'GET ID':
			return {
				...state,
				id: action.payload
			};
		case 'MODAL OPEN':
			return {
				...state,
				modelOpen: action.payload
			};
		case 'Project Modal':
			return {
				...state,
				projectModal: action.payload
			}

			case 'EDIT_PROJECT_MODAL':
				console.log('EDIT_PROJECT_MODAL', action);
				return {
					...state,
					editProjectModal: action.payload
				}
		case 'Project NFT Modal':
			return {
				...state,
				projectNFTModal: action.payload
			}
		default:
			return state;
	}
};
export default reducer;
