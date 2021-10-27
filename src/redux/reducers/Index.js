import Auth from "./Auth";
import nftListReducer from "./nftReducer";
import projectListReducer from "./projectReducers"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: Auth,
  projectReducer: projectListReducer,
  nftReducer: nftListReducer,
});

export default rootReducer;
