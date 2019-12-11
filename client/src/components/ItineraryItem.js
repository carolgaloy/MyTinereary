import React, {Component} from 'react';
import M from 'materialize-css';
import Activities from './Activities';

class ItineraryItem extends Component {

    componentDidMount() {
        var carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {fullWidth: true});
    }
    
    render () {
        var itinerary = this.props.itinerary;
        var activities = this.props.activities;
        return (
            <li className="col s12 m7 itinerary-margin">
                <div className="card horizontal">
                    <div className="card-image">
                        <div className='card-pic'>
                            <img src={itinerary.img} className='profile-picture' alt='Itinerary Creator'/>
                        </div>  
                        <div className='img-subtitle'>
                            <p>userName</p>
                        </div>                      
                    </div>
                    <div className="card-stacked">
                        <div className="card-content flex-column">
                            <p>{itinerary.title}</p>
                            <div className='flex-characteristics'>
                                <p className='fixed-width'><i className="tiny material-icons header-icons">star</i> {itinerary.rating}</p>
                                <p className='fixed-width'><i className="tiny material-icons header-icons">watch_later</i> {itinerary.duration}</p>
                                <p className='fixed-width'><i className="tiny material-icons header-icons">toll</i> {itinerary.price}</p>
                            </div>
                            <div className='flex-characteristics'>
                                {Array.from(itinerary.hashtags).map(hashtag => (
                                    <p key={hashtag}>{hashtag}&emsp;</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapsible-header card-action dropdown col s12 m7">
                    <i className="small material-icons header-icons flex-column" id='expand'>expand_more</i>
                </div>
                <div className='collapsible-body'>
                    {activities.length > 0 ? <Activities activities={activities.filter(activity => activity.itineraryId === itinerary._id)}/> : null}
                </div>                    
            </li>
        );        
    }    
}

export default ItineraryItem;