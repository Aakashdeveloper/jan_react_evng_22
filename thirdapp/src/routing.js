import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router