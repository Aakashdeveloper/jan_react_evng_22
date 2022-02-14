import React from 'react'

const MenuDisplay = (props) => {
    let orderId = []

    const renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b>
                            <img src={item.menu_image} alt={item.menu_name} style={{width:80, height:80}}/>
                            &nbsp; {item.menu_name}- Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <div className="col-md-12 bg-success">
                <h1>Item Added</h1>
                Item Number Added
            </div>
            <div className="col-md-12 bg-info">
                {renderMenu(props)}
            </div>
        </div>
    )

} 

export default MenuDisplay;