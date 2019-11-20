import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer row red lighten-1'>
                <Link to='/' exact><i className="material-icons header-icons centered">home</i></Link>      
            </div>
        );
    }
}

export default Footer;