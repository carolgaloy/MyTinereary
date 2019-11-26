import React, {Component} from 'react';
import M from 'materialize-css';
import img1 from '../img/MYtinUser01.png';
import img2 from '../img/MYtinUser02.png';
import img3 from '../img/MYtinUser03.png';
import img4 from '../img/MYtinUser04.png';

class ItineraryItem extends Component {

    componentDidMount() {
        var carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {fullWidth: true});
    }
    
    render () {
        var itinerary = this.props.itinerary;
        return (
            <li className="col s12 m7">
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
                            <p>{itinerary.hashtags}</p>
                        </div>
                    </div>
                </div>
                <div className="collapsible-header card-action dropdown col s12 m7">
                    <i className="small material-icons header-icons flex-column" id='expand'>expand_more</i>
                </div>
                <div className='collapsible-body'>
                    <div className="carousel">
                        <a className="carousel-item" href="#one!"> <img src={img1} alt='First User'/> </a>
                        <a className="carousel-item" href="#two!"> <img src={img2} alt='Second User'/> </a>
                        <a className="carousel-item" href="#three!"> <img src={img3} alt='Third User'/> </a>
                        <a className="carousel-item" href="#four!"> <img src={img4} alt='Fourth User'/> </a>
                    </div>
                </div>
                    
            </li>        
        );        
    }    
}

export default ItineraryItem;