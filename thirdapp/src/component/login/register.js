import React,{Component} from 'react';
import Header from '../../header';

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }


    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register</h3>
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
                                <input id="email" name="email" type="email" className="form-control"
                                onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">phone</label>
                                <input id="phone" name="phone" className="form-control"
                                onChange={this.handleChange} value={this.state.phone}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                onChange={this.handleChange} value={this.state.password}/>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    </div>  
                </div>
            </div>
            </>
        )
    }
}

export default Register;