import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch'
import Header from '../../header';

const Home = (props) => {
    console.log(">>>>in home props>>>>",props)
    return(
        <div>
            <Header/>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home