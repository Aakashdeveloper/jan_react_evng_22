import React from 'react';

const UserDisplay = (props) => {

    const renderTable = ({usersData}) => {
        if(usersData){
            return usersData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Users Data</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>

            </table>
        </div>
    )
}

export default UserDisplay