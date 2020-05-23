import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons:[
      {name:"Max", age:28},
      {name:"Manu",age:29},
      {name:"Stephanie", age:26}
    ]
  }

  switchNameHandler = () => {
    // console.log("Clicked !!")
    this.setState({
      persons:[
        {name:"Maximilian", age:28},
        {name:"Manu",age:29},
        {name:"Stephanie", age:27}
      ],otherState: "somevalue"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler}>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'new Text to work'));
  }
}

export default App;
