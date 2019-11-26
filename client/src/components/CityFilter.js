import React, {Component} from 'react';

class CityFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          	cityFilter: ""
        }
    }
      
    handleChange = (e) => {
        this.setState({
          	cityFilter: e.target.value
        })
        this.props.onChange(e.target.value)
    }
      
    render() {
        return (
            <div className='filterContainer row'>
                <input type="text" id="filter" placeholder='Look for cities'
                value={this.state.cityFilter} 
                onChange={this.handleChange}/>
            </div>
        )
    }
    
}

export default CityFilter;