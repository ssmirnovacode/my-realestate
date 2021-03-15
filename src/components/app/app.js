import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page';
import BuyPage from '../../pages/buy-page/buy-page';
import SellPage from '../../pages/sell-page/sell-page';
import RentPage from '../../pages/rent-page/rent-page';
import AboutPage from '../../pages/about-page/about-page';
import ContactPage from '../../pages/contact-page/contact-page';
import SearchPage from '../../pages/search-page/search-page';
import DetailsPage from '../../pages/details-page/details-page';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />                  
                <Route path='/' exact component={HomePage} />
                <Route path='/buy' component={BuyPage} />
                <Route path='/search' component={SearchPage}/>
                <Route path='/sell' component={SellPage} />
                <Route path='/rent' component={RentPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path={`/properties/:id`} render={ ({match}) => {
                    const {id} = match.params;
                    return <DetailsPage itemId={+id}/>
                }}/>
                <Footer /> 
            </BrowserRouter>
        </>
    );
}

export default App;