import React, { Component } from 'react'

export default class validation extends Component {
    render() {
        let stringValidationJsx =  null;
        if(this.props.stringLength < 5){
            stringValidationJsx = (
                <label>Text length is : {this.props.stringLength}, Text is too short</label>
            )
        }
        else if(this.props.stringLength > 20){
            stringValidationJsx = (
                <label>Text length is : {this.props.stringLength}, Text is too Long</label>
            ) 
        }
        else{
            stringValidationJsx = (
                <label>Text length is : {this.props.stringLength}, Text is too Normal</label>
            )
        }
        return (
            <div>
                {stringValidationJsx}
            </div>
        )
    }
}
