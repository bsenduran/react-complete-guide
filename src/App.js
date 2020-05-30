import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ], showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log("Clicked !!")
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ], otherState: "somevalue"
    })
  }

  nameChangedHandler = (event) => {
    // console.log("Clicked !!")
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    })
  }

  togglePersonHandler = () => {
    const currentShow = this.state.showPerson;
    this.setState({ showPerson: !currentShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!!")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'new Text to work'));
  }
}

export default App;
