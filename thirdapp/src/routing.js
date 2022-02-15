import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import Listing from './component/listing/listing';
import Details from './component/details/restDetails';
import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewOrder';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:id" component={Listing}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/viewOrder" component={ViewOrder}/>
                    <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router