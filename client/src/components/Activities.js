import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Activities extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        if (this.props.activities.length > 0) {
            var activities = this.props.activities;
            console.log(activities);
            return (
                <Slider {...settings}>                    
                    {
                        activities.map(activity => 
                            <div className='whatever' key={activity._id} style={{backgroundImage: `url(${activity.photo})`}}>
                                <img className='activity-image' src={activity.photo} alt={activity.name}/>
                                <p className='center'>{activity.name}</p>
                            </div>
                        )
                    }
                </Slider>
            );
        } else {
            return (
                <p className='center'>Sorry, there are no defined activities for this itinerary</p>
            )
        }
        
    }
}

export default Activities;