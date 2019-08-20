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

   swithNameHandler = (inpName) => {
     //console.log('this is click event');
     //Dont do this:this.state.persons[0].name = 'Max million'
     this.setState({
      persons:[
        {name:inpName, age:40},
        {name:"shiva", age:44},
      ]
     })
   }

   onChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:"Narayana", age:40},
        {name:event.target.value, age:44},
      ]
     })
   }

  render() {
    return (
      <div className="App">
        <h1> this is react snippet</h1>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click = {this.swithNameHandler}
        />

        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         change={this.onChangeHandler}
         >My hobbies are reading</Person>

        <button onClick={this.swithNameHandler.bind(this, 'sambashivarao')}>SwithName</button>
      </div>
    )
  }
}

export default App;

