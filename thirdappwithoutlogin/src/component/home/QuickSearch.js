import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div className="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    componentDidMount() {
        fetch(url,{method: 'GET'})
        // return promise
        .then((res) =>  res.json())
        // return data
        .then((data) => {
            this.setState({mealType:data})
        })
    }
    
}

export default QuickSearch