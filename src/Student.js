import React from "react";


class Student extends React.Component{
    render(){
        const {name,marks}=this.props;
        return(
        <>
        <h1>Hello, {name}</h1>
        <h1>you have secured {marks}</h1>
        <hr></hr>
        </>
        )
    }
}
export default Student;