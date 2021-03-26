import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../../pages/home-page/home-page';
import BuyPage from '../../pages/buy-page/buy-page';
import SellPage from '../../pages/sell-page/sell-page';
import RentPage from '../../pages/rent-page/rent-page';
import AboutPage from '../../pages/about-page/about-page';
import ContactPage from '../../pages/contact-page/contact-page';
import SearchPage from '../../pages/search-page/search-page';
import DetailsPage from '../../pages/details-page/details-page';
import PrivacyPage from '../../pages/privacy-page/privacy-page';
import basePath from '../../assets/basePath';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />                  
                <Route path={`${basePath}/`} exact component={Home} />
                <Route path={`${basePath}/buy`} component={BuyPage} />
                <Route path={`${basePath}/search`} component={SearchPage}/>
                <Route path={`${basePath}/sell`} component={SellPage} />
                <Route path={`${basePath}/rent`} component={RentPage} />
                <Route path={`${basePath}/about`} component={AboutPage} />
                <Route path={`${basePath}/contact`} component={ContactPage} />
                <Route path={`${basePath}/properties/:id`} render={ ({match}) => {
                    const {id} = match.params;
                    return <DetailsPage itemId={+id}/>
                }}/>
                <Route path={`${basePath}/privacy`} component={PrivacyPage} />
                <Footer /> 
            </BrowserRouter>
        </>
    );
}

export default App;