import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

  class App extends Component {
   state = {
     persons:[
       {name:"samba", age:25},
       {name:"shiva", age:26},
     ]
   }

   swithNameHandler = () => {
     //console.log('this is click event');
     //Dont do this:this.state.persons[0].name = 'Max million'
     this.setState({
      persons:[
        {name:"samba", age:40},
        {name:"shiva", age:44},
      ]
     })
   }

  render() {
    return (
      <div className="App">
        <h1> this is react snippet</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are reading</Person>
        <button onClick={this.swithNameHandler}>SwithName</button>
      </div>
    )
  }
}

export default App;

