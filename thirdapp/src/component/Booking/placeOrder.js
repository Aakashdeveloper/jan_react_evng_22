import React,{Component} from 'react';

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
                                <input id="fname" name="name" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">phone</label>
                                <input id="phone" name="phone" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input id="address" name="address" className="form-control"/>
                            </div>
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </div>  
                </div>
            </div>
        )
    }

    componentDidMount() {
        let menuItem = sessionStorage.getItem('menu');
    }
}

export default PlaceOrder;