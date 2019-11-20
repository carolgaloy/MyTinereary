import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CityItem from './CityItem.js';

class CityList extends Component {

    render () {
        
        if (this.props.cities[0] === "NoCities") {
            return (
                <div>
                    <ul className='cityButtons'>
                        <li key='NoCities'><p className='noCities'>No cities found</p></li>
                    </ul>
                </div>                
            );

        } else {
            console.log(this.props.cities);
            return (
                <div className='extraMargin'>
                    {
                        this.props.cities.map(city => (
                            <CityItem city={city} />))
                    }
                </div>
            );
        }

        
    }    
}

export default CityList;