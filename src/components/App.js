/*
Top Level React Component 
For a more sophisticated setup - just add your routes via import (React-Router or other...)
*/

import React, {Component} from 'react';

/* Import your components here*/
import Header from './Header';

/**App Styles are imported here */
var AppStyles = require('./App.css')

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <h2>This is the AppComponent!</h2>
            </div>
        );
    }
}