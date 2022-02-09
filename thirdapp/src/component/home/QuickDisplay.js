import React from 'react';
import {Link} from 'react-router-dom'

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to="/" key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tileContainer2">
                                <div className="componentHeading">
                                    <span>{item.mealtype}</span>
                                </div>
                                <div className="componentSubHeading">
                                    <span>{item.content}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay