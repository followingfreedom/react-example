import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndexCom extends Component{
	constructor(props) {
        super(props);
    }

    render(){
    	console.log("Enter Index Component render...");
        console.log("IndexCom props: ", this.props);
    	return (
    		<div>
    			index {JSON.stringify(this.props.json)}
    		</div>
    	);
    }
}

function select(state){
    return {
        json:state.indexReducer
    }
}

export default connect(select)(IndexCom)