import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../../pages/home-page/home-page';
import SellPage from '../../pages/sell-page/sell-page';
import AboutPage from '../../pages/about-page/about-page';
import ContactPage from '../../pages/contact-page/contact-page';
import SearchPage from '../../pages/search-page/search-page';
import DetailsPage from '../../pages/details-page/details-page';
import PrivacyPage from '../../pages/privacy-page/privacy-page';
import basePath from '../../assets/basePath';
import DealSearch from '../deal-search/deal-search';
import ScrollToTop from '../scrollToTop/scrollToTop';
 
const App = (props) => {
    return(
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <div className="app-wrapper">
                        <div className="app-content">
                            <Header />                  
                            <Route path={`${basePath}/`} exact component={Home} />
                            <Route path={`${basePath}/buy`} component={({history}) => <DealSearch additionalURL="sale-items" dealType = "sale" history={history}/>} />
                            <Route path={`${basePath}/search`} component={SearchPage}/>
                            <Route path={`${basePath}/sell`} component={SellPage} />
                            <Route path={`${basePath}/rent`} component={({history}) => <DealSearch additionalURL="rent-items" dealType = "rent" history={history}/>} />
                            <Route path={`${basePath}/about`} component={AboutPage} />
                            <Route path={`${basePath}/contact`} component={ContactPage} />
                            <Route path={`${basePath}/properties/:id`} render={ ({match}) => {
                                const {id} = match.params;
                                return <DetailsPage itemId={id}/>
                            }}/>
                            <Route path={`${basePath}/privacy`} component={PrivacyPage} />
                        </div>
                        <Footer /> 
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
}

export default App;