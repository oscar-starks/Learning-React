import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'this is just the beninging',
            counter : 0
        }
    }

    changeMessage(){

        if(this.state.counter % 2 === 0){
            this.setState((prevState) => ({
                message: `this is the first beninging and counter is ${prevState.counter + 1}`,
                counter: prevState.counter + 1
            }))
        }else{
            this.setState((prevState)=>({
                message: `this is just the second beninging and counter is ${prevState.counter + 1}`,
                counter: prevState.counter + 1

            }))
        }
        
    }

    render(){
        return (
        <div>
            <h1> {this.state.message}</h1>
            <button onClick={() => this.changeMessage()}> Subscribe </button>
        </div>
        
        )
    }
}

export default Message