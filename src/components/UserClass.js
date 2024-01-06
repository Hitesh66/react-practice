import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render(){
       return (
        <div className="user-card">
            <h2>Name : {this.props.name}</h2>
            <h3>Location : Ulhasnagar</h3>
            <h4>Contact : @hitesh66</h4>
            <h5>Name : {this.state.count}</h5>
        </div>
        ); 
    }
}

export default UserClass;