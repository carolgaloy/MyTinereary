import React, {Component} from 'react';
import CityItem from './CityItem.js';

class CityList extends Component {

    render () {
        
        if (this.props.cities[0] === "NoCities") {
            return (
                <div className='noCities'>
                    <i className="material-icons header-icons">error_outline</i>
                    <p className='text'>No cities found</p>                    
                </div>                
            );

        } else {
            console.log(this.props.cities);
            return (
                <div className='extraMargin'>
                    {
                    this.props.cities.map(city => (
                        <CityItem city={city} key={city.name}/>))
                    }
                </div>
            );
        }
    }    
}

export default CityList;