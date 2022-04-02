import React, { Component } from "react";

export default class Boton extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
    }
    render(){
        return(
            <div>
                <button>{this.state.contador}</button>
            </div>
        );

    }
};