import React, { Component } from 'react';
import logo from '../img/MYtineraryLogo.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Cities from './Cities.js';
import circle from '../img/circled-right-2.png';

class Home extends Component {
    render() {
        return (
            <div className='centered extraMarginTop'>
                <img src={logo} alt='mytinerary logo' className='ninety' />
                <p className='italic ninety'>Find your perfect trip, designed by insiders who know and love their cities</p>
                <Link to="/cities"><img src={circle} alt='Go To Cities' className='cities-circle' /></Link>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/cities' component={Cities} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home;