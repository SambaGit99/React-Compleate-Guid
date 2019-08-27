import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "samba", age: 25 },
      { name: "shiva", age: 26 },
    ],
    showPerson: false
  }

  swithNameHandler = (inpName) => {
    //console.log('this is click event');
    //Dont do this:this.state.persons[0].name = 'Max million'
    this.setState({
      persons: [
        { name: inpName, age: 40 },
        { name: "shiva", age: 44 },
      ]
    })
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Narayana", age: 40 },
        { name: event.target.value, age: 44 },
      ]
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <div>
          <button onClick={this.togglePersons}>SwithName</button>
          {persons}
        </div>
      </div>
    )
  }
}

export default App;

