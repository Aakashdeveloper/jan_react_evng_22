import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:''
        }

        console.log(">>>>>inside constructor>>>>")
    }

    render(){
        console.log(">>>>>inside render>>>>")
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select>
                        <option>Select City</option>
                    </select>
                    <select id="restaurant">
                        <option>Select Restaurants</option>
                    </select>
                </div>
            </div>
        )
    }

    // api calling 
    componentDidMount(){
        console.log(">>>>>inside componentDidMount>>>>")
    }
    
}

export default Search