import {INDEX_PAGE_INFO,NEWS_PAGE_INFO} from './action';
import {combineReducers} from "redux";


function indexReducer (state={}, action){
	switch (action.type){
		case INDEX_PAGE_INFO:
			console.log("indexReducer action=====",action);
			return Object.assign(state,action.json);
		default:
			return state;
	}
};

function newsReducer (state={}, action){
	switch(action.type){
		case NEWS_PAGE_INFO:
			console.log("newsReducer action====", action);
			return Object.assign(state,action.json);
		default:
			return state;
	}
};

const appReducer = combineReducers({indexReducer, newsReducer});

export default appReducer;