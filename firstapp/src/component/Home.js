import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDisplay';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON
        }
    }

    filterProduct = (keyword) => {
        console.log("in home>>> ", keyword)
    }

    render(){
        return (
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Product prodData={this.state.productData}/>
                <Footer year="2022"/>
            </>
        )
    }
}

export default Home;