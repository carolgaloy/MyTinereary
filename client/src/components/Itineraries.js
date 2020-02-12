import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchItineraries } from '../store/actions/itineraryAction.js';
import { fetchActivities } from '../store/actions/activityAction.js';
import ItineraryList from './ItineraryList.js';

class Itineraries extends Component {

	constructor(props) {
        super(props);
        this.state = {
            city: {}
        };
    }

    componentDidMount() {
		this.props.fetchItineraries(this.props.match.params.id);
		this.props.fetchActivities(this.props.match.params.id);
		
		fetch('/cities/' + this.props.match.params.id)
			.then(response => response.json())
			.then(result => this.setState({city:result}))
			.catch(e => 
				{console.log(e)}
			);
	}

    render() { 
		const itineraries = this.props.itineraryList;
		const activities = this.props.activityList;
		
        if (this.props.itineraryList.isFetching) {

			return (
				<p>Fetching itineraries...</p>
			);

        } else {
			return (
				<div className='extraMargin extraMarginTop extraMarginSides'>
                    <h3 className='city-title'>{this.state.city.name}</h3>
				  	<ItineraryList itineraries={itineraries} activities={activities}/>
					<button><Link to='/cities'>Choose another city</Link></button>
				</div>
			);
		}        
    }
}

const mapStateToProps = state => {
    return {
		itineraryList: state.itineraries.payload,
		activityList: state.activities.payload
    };
};
  
export default connect(
    mapStateToProps,
	{ fetchItineraries, fetchActivities }
)(Itineraries);