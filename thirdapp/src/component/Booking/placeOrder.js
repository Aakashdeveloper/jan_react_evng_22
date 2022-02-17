import React,{Component} from 'react';
import './placeOrder.css';


const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const postUrl = "http://localhost:7890/orders"
class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'',
            email:'',
            cost:0,
            address:'Hno12',
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        console.log(this.state)
        let obj = this.state
        obj.menuItem = sessionStorage.getItem('menu')
        fetch(postUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrder'))
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order For Restaurant {this.props.match.params.restName}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                onChange={this.handleChange} value={this.state.name}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">phone</label>
                                <input id="phone" name="phone" className="form-control"
                                onChange={this.handleChange} value={this.state.phone}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input id="address" name="address" className="form-control"
                                onChange={this.handleChange} value={this.state.address}/>
                            </div>
                        </div>
                        {this.renderItem(this.state.menuItem)}
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs.{this.state.cost}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.checkout}>Submit</button>

                    </div>  
                </div>
            </div>
        )
    }

    componentDidMount() {
        let menuItem = sessionStorage.getItem('menu');
        let OrderId = [];
        menuItem.split(',').map((item) => {
            OrderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(OrderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.menu_price)
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
        
        
    }
}

export default PlaceOrder;