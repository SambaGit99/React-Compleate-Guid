import React from 'react'

const Person =  props => {
    
    return (
        <div>
            <h2 onClick={props.click}>I'm {props.name} and I am {props.age} year's old</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default Person