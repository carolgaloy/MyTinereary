import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Activities extends Component {

    render() {
        console.log(this.props);
        return (
            <div className='extraMargin extraMarginTop extraMarginSides'>
                <h3 className='city-title'>{this.state.city.name}</h3>
                <ItineraryList itineraries={itineraries}/>
                <Link to='/cities'>Choose another city</Link>
            </div>
        );
		        
    }
}

export default Activities;