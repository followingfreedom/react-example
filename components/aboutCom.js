import React, { Component } from 'react';

export default class AboutCom extends Component{
	constructor(props) {
        super(props);
    }

    render(){
    	console.log("Enter About Component render...");
    	return (
    		<div>
    			About here!
    		</div>
    	);
    }
}