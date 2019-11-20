import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CityItem extends Component {

    render () {
        
        var city = this.props.city;
        return (
            <Link to={`/itineraries/${city._id}`}>
                <div className="row cardMargin">
                    <div className="col s12 m5">
                        <div className="card-panel teal cityItem cityButton" key={city.name} style={{backgroundImage: `url(${city.img})`}}>
                            <div className="card-content">
                                <span className="card-title cityButtonTitle">{city.name}</span>
                                <p className='cityButtonCountry'>{city.country.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>       
        );    
    }    
}

export default CityItem;