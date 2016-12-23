import React, { Component } from 'react';
import styles from '../styles/nav.css';

export default class Nav extends Component{
	constructor(props) {
        super(props);
    }

    render(){
    	console.log("Enter Nav render...");
    	return (
    		<ul>
    			<li><a href="#/index">首页</a></li>
    			<li><a href="#/news">资讯</a></li>
    			<li><a href="#/about">关于</a></li>
    		</ul>
    	);
    }
}
