// your Bomb code here!

import React from "react";

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
        secondsLeft: props.initialCount
        }
    }

    seconds(){
        if (this.state.secondsLeft === 0){
            return "Boom!"
        }
        else return `${this.state.secondsLeft} seconds left before I go boom!`
    }

    render(){
        return (
            <div className="bomb">
                {this.seconds()}
            </div>
        )
    }
   
   
}

export default Bomb; 
