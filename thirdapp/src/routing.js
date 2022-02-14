import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import Listing from './component/listing/listing';
import Details from './component/details/restDetails';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:id" component={Listing}/>
                    <Route path="/details" component={Details}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router