import React, { Component } from 'react'
import './CharComp.css'

export default class extends Component {
    render() {
        return (
            <div className="charComponent" onClick = {this.props.clicked}>
               <label>{this.props.character}</label>
            </div>
        )
    }
}
