import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Header.css'
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false);
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => { 
        if(this.state.userData.name || sessionStorage.getItem('uName') !== null){
            if(sessionStorage.getItem('uName') !== null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>
                        <Link className="btn btn-primary" to="/">
                             Hi <img src={image} style={{height:50,width:50}}/>{name}</Link>
                            &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                    </>
                    )
            }else{
                let data = this.state.userData;
                let outputArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo',outputArray);
                sessionStorage.setItem('loginStatus',true);
                return(
                    <>
                        <Link className="btn btn-primary" to="/"><span className="glyphicon glyphicon-user"></span> Hi {data.name}</Link>
                            &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                    </>
                )
            }
            
        }else{
            return(
                <>
                    <a class="btn btn-info" href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a> &nbsp;
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                </>
            )
        }
    }
    render(){
        console.log("in header>>>",this.state)
        //sessionStorage.setItem("uName",this.state.username)
        return(
            <div className="header">
                <div id="brand">
                    Techno Food
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.location.search){
            console.log(">>>>>inside oauth")
            
            //console.log(this.props.location.search)
            if(this.props.location.search.split('=')[0] == '?code'){
               var code = this.props.location.search.split('=')[1]
            }

            if(code){
                let requestedData = {
                    code:code
                }
                fetch(`http://localhost:9900/oauth`,{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(">>>data",data)
                    let username = data.name;
                    let img = data.avatar_url
                    sessionStorage.setItem("uName",username)
                    sessionStorage.setItem("uImg",img)
                    sessionStorage.setItem('loginStatus',true);
                    this.setState({username:username,userImg:img})
                })
            }
        }
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}


export default withRouter(Header);