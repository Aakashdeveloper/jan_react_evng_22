import axios from 'axios';
import React,{Component} from 'react';
import OrderDisplay from './orderDisplay';

const url = "http://localhost:7890/orders"
class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            orders:''
        }
    }
    render(){
        return(
            <>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;