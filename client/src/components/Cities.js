import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllCities } from '../store/actions/cityAction.js';
import Filter from './CityFilter.js';
import CityList from './CityList.js';

class Cities extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityList: [],
			filteredCities: []
        };
    }

    componentDidMount() {
        this.props.fetchAllCities();
    }
	
	filterCities = cityFilter => {
		let filteredCities = this.props.cityList.payload;
		filteredCities = filteredCities.filter(city => {
		  	let cityName = city.name.toLowerCase();
		  	return cityName.startsWith(cityFilter.toLowerCase());
		})

		if (filteredCities.length === 0) {
			filteredCities.push('NoCities');
		}

		this.setState({
		  	filteredCities
		})
	}
	

    render() { 
		let cities = this.props.cityList.payload;

		if (this.state.filteredCities.length !== 0){
            cities = this.state.filteredCities;
		}

		if (this.props.cityList.isFetching) {
			return (
				<p>Fetching cities...</p>
			);

		} else {
			return (
				<div className='extraMarginTop'>					
					<Filter onChange={this.filterCities}/>
					<CityList cities={cities} />
				</div>
			);
		}        
    }
}

const mapStateToProps = state => {
    return {
        //now this.props.cities will be the cities state object
        cityList: state.cities
    };
};
  
export default connect(
    mapStateToProps,
    // fetchAllCities will trigger the API call
    { fetchAllCities }
)(Cities);