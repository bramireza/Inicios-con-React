import React, {Component} from "react";

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true,
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session? "verdadero" : "falso"}
            </div>
        )
    }
}