import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDisplay';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    /*var a = [2,3,7,6,8,9,12]
        a.filter((data) => {return data>5})*/

    filterProduct = (keyword) => {
        var output = this.state.productData.filter((item) => {
            return (item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1) 
        })
        this.setState({filteredData:output})
    }

    render(){
        return (
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2022"/>
            </>
        )
    }
}

export default Home;