import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay';

const url = "http://zomatoajulypi.herokuapp.com/details";
const murl = "https://zomatoajulypi.herokuapp.com/menu"

class RestDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    addToCart = (data) => {
        console.log(">>>ids",data)
        this.setState({userItem:data})
    }
    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
        // let details = this.state.details
        // destructing
        let {details} = this.state
        return(
            <div className="main">
            <div className="tileImage">
                <div className="imageClass">
                    <img src={this.state.details.restaurant_thumb} alt=""/>
                </div>
            </div>
            <div className="tileContent">
                <div className="content">
                    <h1>{details.restaurant_name}</h1>
                    <span id="cfeedback">245 Customer Say {details.rating_text}</span>
                    <h4>Old Price: <strike>Rs 1500 / 2 Person</strike></h4>
                    <h4>Offer Price: Rs {details.cost}/ 2 Person</h4>
                    <h3>We Provide Best Service </h3>
                    <div>
                        <div className="icons">
                            <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                        </div>
                        <div className="icons">
                            <img src="https://i.ibb.co/s56LLF9/homedelivery.png"/>
                        </div>
                    </div>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                
                            </TabList>
                            <TabPanel>
                                <h2> {details.restaurant_name}</h2>
                                <p> {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                             </TabPanel>
                            <TabPanel>
                                <p>{details.address}</p>
                                <p>Contact Us:  {details.contact_number}</p>
                            </TabPanel>
                            
                        </Tabs>
                        <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                        <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                <center><h2>Menu</h2></center>
               <MenuDisplay menudata={this.state.menuList}
               finalOrder = {(data) => {this.addToCart(data)}}/>
            </div>
            
        </div>
        
        )
    }


    //calling api with async
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`);
        let menuResponse = await axios.get(`${murl}/${restId}`);
        this.setState({details:response.data[0],menuList:menuResponse.data});
    }
}

export default RestDetails