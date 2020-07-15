// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    // constructor(props){
    //     super()
    //     this.state = {
    //         onDelayedClick: props.onDelayedClick,
    //         delay: props.delay
    //     }
    // }

    passToDelayClick = (e) => {
        e.persist();

        setTimeout(() => {this.delayClick(e)}, this.props.delay);
    }

    delayClick = (x) => {
        return this.props.onDelayedClick(x);
    }

    render(){
        return(
            <button onClick={this.passToDelayClick}>text</button>
        )
    }
}