import React from 'react';
import './carousel.scss';

const Carousel = (props) => {

    const {images, title} = props;
    let activeItem = 0;

    return(
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    images.map((item,i) => {                    
                        return(
                            i === activeItem ? <li key={item} data-target={"#carouselIndicators"} data-slide-to={i} className="active"></li>
                            : <li key={item} data-target={"#carouselIndicators"} data-slide-to={i}></li>
                        )
                    })
                }
            </ol>
            <div className="carousel-inner">
                {
                    images.map((item,i) => {
                        return(
                            i === activeItem ?
                            <div key={item} className="carousel-item active">
                                <img className="d-block w-100" src={item} alt={title}/>
                            </div>
                            :<div key={item} className="carousel-item">
                                <img className="d-block w-100" src={item} alt={title}/>
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;