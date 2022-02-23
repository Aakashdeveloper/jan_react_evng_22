import axios from 'axios';
import React,{Component} from 'react';
import OrderDisplay from './orderDisplay';
import Header from '../../header';

const url = "http://localhost:7890/orders"
class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            orders:''
        }
    }
    render(){
        if(!sessionStorage.getItem('userInfo')){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To See Booking</h2>
                    </center>
                    
                </div>
            )
        }
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;