import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working!</p>
        <Person name="Max" age="30"/>
        <Person name="Leo" age="20">My Hobbies: Racing</Person>
        <Person name="Lari" age="17"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does that work now?'));
  }
}
export default App;
