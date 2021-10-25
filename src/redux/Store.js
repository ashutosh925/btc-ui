import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './reducers/Auth';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { nftListReducer } from './reducers/nftReducer';
import { projectListReducer } from './reducers/projectReducers';
const initialState = {};

const Middleware = [ thunk ];

const reducers = combineReducers({
	auth,
	nftReducer:nftListReducer,
	projectReducer:projectListReducer,
});

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...Middleware)));
export default store;

//  //////

// import { applyMiddleware, createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "../redux/reducers/Index";

// const middleWare = [thunk];

// const reducer = persistReducer(
//   {
//     key: "auth", // key is required
//     storage, // storage is now required

//     whitelist: ["Auth"],
//   },
//   combineReducers({ ...rootReducer })
// );

// const configStore = (initialState = {}) => {
//   const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleWare))
//   );

//   return {
//     persistor: persistStore(store),
//     store,
//   };
// };

// const { store, persistor } = configStore();

// global.store = store;
// export { store, persistor };
