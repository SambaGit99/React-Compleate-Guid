import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import Validation from './Validation/validation'
import CharComp from './CharComponent/CharComp'

class App extends Component {
  state = {
    persons: [
      {id:'1', name: "samba", age: 25 },
      {id:'2', name: "shiva", age: 26 },
    ],
    showPerson: false,
    lengthOfInputString:0,
    inputCharString:''
  }

  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]; // Use spread operator since old array reference will not be hold
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  stringLengthOnChange = (event) => {
    let inputLength = null;
    inputLength = event.target.value.length;
    this.setState({lengthOfInputString: inputLength})
  }

  charInputOnChange = (event) => {
    this.stringLengthOnChange(event);
    this.setState({inputCharString : event.target.value})
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.inputCharString.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputCharString: updatedText});
  }

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        //Listing the array or data by map function
        <div>
          {this.state.persons.map((person, index) => {
            return <div className="margin-1"> <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeEventHandler(event, person.id)}
            /></div>
          })}
        </div>
      )
    }

    const charList = this.state.inputCharString.split('').map((ch, index) => {
      return <CharComp 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App margin-10">
        <div>
          {/* <button onClick={this.togglePersons}>SwithName</button> */}
          <div>
            {persons}
          </div>
        </div>
        {/* Practice - examples */}
        <div>
          <span>
            {/* <input type="text" onChange={(event) => this.stringLengthOnChange(event)}></input> */}
            <input type="text" onChange={(event) => this.charInputOnChange(event)}></input>
          </span>
          <span>
            <Validation stringLength={this.state.lengthOfInputString}></Validation>
          </span>
        </div>
        <div>
          {charList}
        </div>
      </div>
    )
  }
}

export default App;

