import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import {createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import {fetchIndexInfo, fetchNewsInfo} from './action';
import App from './app';
import IndexCom from './components/indexCom';
import NewsCom from './components/newsCom';
import AboutCom from './components/aboutCom';


const store = createStore(appReducer, applyMiddleware(thunk));
store.dispatch(fetchIndexInfo("data/api/total"));
store.dispatch(fetchNewsInfo("data/api/issues"));
console.log("state=====",store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
    		<Route path="/" component={App}>
    			<Route path="/index" component={IndexCom} />
    			<Route path="/news" component={NewsCom} />
    			<Route path="/about" component={AboutCom} />
    		</Route>
  		</Router>
  	</Provider>,
	document.getElementById('root')
);