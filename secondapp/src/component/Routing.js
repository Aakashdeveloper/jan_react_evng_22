import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';

const Router = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/profile" component={Profile}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router