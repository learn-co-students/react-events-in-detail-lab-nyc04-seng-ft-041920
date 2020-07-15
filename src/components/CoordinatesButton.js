// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    // constructor(props){
    //     super()
    //     this.state = {
    //         onReceiveCoordinates : props.onReceiveCoordinates()
    //     }
    // }

    findMouseCoords = (e) => {
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button onClick={this.findMouseCoords}></button>
        )
    }
}