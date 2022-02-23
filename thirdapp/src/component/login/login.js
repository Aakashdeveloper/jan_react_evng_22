import React,{Component} from 'react';
import Header from '../../header';

const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'@gmail.com',
            password:'12345678',
            message:''
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
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token);
                this.props.history.push('/')
            }
        })
    }


    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" type="email" className="form-control"
                                onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                onChange={this.handleChange} value={this.state.password}/>
                            </div>
                        </div>
                        <button className="btn btn-info" onClick={this.handleSubmit}>Login</button>
                    </div>  
                </div>
            </div>
            </>
        )
    }
}

export default Login;