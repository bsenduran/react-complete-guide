import React, { Component } from 'react';
import Styled from 'styled-components';
import Person from './Person/Person'
import './App.css';

const StyledButton = Styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ], showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const currentShow = this.state.showPerson;
    this.setState({ showPerson: !currentShow });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <StyledButton
            alt={this.state.showPerson}
            onClick={this.togglePersonHandler}>Toggle Person</StyledButton>
          {persons}
        </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'new Text to work'));
  }
}

export default App;
