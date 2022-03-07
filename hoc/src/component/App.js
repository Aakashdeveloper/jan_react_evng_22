import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const stocks = [
    {
        id: 1,
        name: 'TCS'
            
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ]

const users = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
]

let Stocks = Hoc(StockList, stocks)
let Users = Hoc(UserList, users)

class App extends Component {

    render(){
        return(
            <div>
                <Stocks/>
                <Users/>
            </div>
        )
    }
}

export default App;