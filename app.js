import React, { Component } from 'react';
import Nav from './components/nav'

export default class App extends Component {
  render() {
    console.log("Enter app render...");
    return (
    	<div>
            <Nav />
            <section className="section">
                <div className="container is-vcentered">
                    {this.props.children}
                </div>
            </section>
    	</div>
    );
  }
}