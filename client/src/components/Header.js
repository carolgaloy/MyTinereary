import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div className='row red lighten-1 header'>
                <div className="col s6"><i className="material-icons header-icons">person</i></div>
                <div className="col s6"><i className="material-icons header-icons right">dehaze</i></div>
            </div>
        );
    }
}

export default Header;