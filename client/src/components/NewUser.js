import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';

class NewUser extends Component {
    render() {
        return (
            <div className='row red lighten-1 extraMarginTop'>
                <p>Hi, we are trying to sign in</p>
                <div className="col s6"><i className="material-icons header-icons">person</i></div>
                <div className="col s6"><i className="material-icons header-icons right">dehaze</i></div>
            </div>
        );
    }
}

export default NewUser;