import React, {Component} from 'react';
import ItineraryItem from './ItineraryItem.js';
import M from 'materialize-css';

class ItineraryList extends Component {

    componentDidMount() {
        var collapsible = document.querySelectorAll('.collapsible');
        console.log(collapsible);
		M.Collapsible.init(collapsible, {});
    }

    render () {        
        const activities = this.props.activities;
        return (
            <ul className='collapsible'>
                {
                    Array.from(this.props.itineraries).map(itinerary => (
                        <ItineraryItem itinerary={itinerary} activities={activities} key={itinerary.title}/>
                    ))
                }
            </ul>
        );        
    }    
}

export default ItineraryList;