import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import Listing from './component/listing/listing';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:id" component={Listing}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router