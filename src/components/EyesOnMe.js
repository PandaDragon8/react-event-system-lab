import React from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends React.Component{
    
    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    
    render(){
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Click Me!</button>
  }
}