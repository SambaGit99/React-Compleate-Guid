import React from 'react'
import './Person.css'

const person =  props => {
    
    return (
        <div className="Person">
            <h2 onClick={props.click}>I'm {props.name} and I am {props.age} year's old</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person