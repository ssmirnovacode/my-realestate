import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../../pages/home-page';
import BuyPage from '../../pages/buy-page';
import SellPage from '../../pages/sell-page/sell-page';
import RentPage from '../../pages/rent-page';
import AboutPage from '../../pages/about-page';
import ContactPage from '../../pages/contact-page';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />                  
                <Route path='/' exact component={HomePage} />
                <Route path='/buy' component={BuyPage} />
                <Route path='/sell' component={SellPage} />
                <Route path='/rent' component={RentPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Footer /> 
            </BrowserRouter>
        </>
    );
}

export default App;