import React from 'react';
import './home-page.scss';
import {Link} from 'react-router-dom';

const HomePage = () => {

    return(
        <div className="container">
            <div className="home row">
                <div className="col">
                    <h2>Luxury Real Estate</h2>
                    <h3>Barcelona · Tarragona · Lleida · Girona</h3>
                    <p>
                    aProperties has an extensive portfolio of properties in the very best locations in the city of Barcelona, Madrid and Valencia.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="home provinces-block_item col-12 col-md-6">
                    <Link to="/buy">
                        <img src="https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/spain/offices/hero-image-emea-offices-barcelona-small-750x480.jpg?rev=52c4d652a22845d6a53f001f0f16218e" alt="Barcelona"/>
                        <div className="home provinces-block_item_title">Barcelona</div>
                    </Link>
                </div>
                <div className="home provinces-block_item col-12 col-md-6">
                    <Link to="/buy">
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/a6/3d.jpg" alt="Tarragona" />
                        <div className="home provinces-block_item_title">Tarragona</div>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="home provinces-block_item col-12 col-md-6">
                    <Link to="/buy">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Lleida_-_panoramio_-_Jorge_Franganillo.jpg" alt="Lleida" />
                        <div className="home provinces-block_item_title">Lleida</div>
                    </Link>
                </div>
                <div className="home provinces-block_item col-12 col-md-6">
                    <Link to="/buy">
                        <img src="https://cdn.britannica.com/35/190035-050-C44235DF/Girona-Spain-Onar-River.jpg" alt="Girona" />
                        <div className="home provinces-block_item_title">Girona</div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage;