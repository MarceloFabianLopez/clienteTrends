import React, { Component } from 'react'

export default class TituloRealtime extends Component {
    render() {
        return (
            <div>
               <h2> {this.props.titulo}</h2>
            </div>
        )
    }
}
