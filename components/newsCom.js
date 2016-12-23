import React, { Component } from 'react';

export default class NewsCom extends Component{
	constructor(props) {
        super(props);
    }

    render(){
    	console.log("Enter news Component render...");
    	return (
    		<div>
    			news here!
    		</div>
    	);
    }
}