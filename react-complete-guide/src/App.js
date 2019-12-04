import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: 'Padre', age: 39},
            { name: 'Lari', age: 20},
            { name: 'Leo', age: 17},
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        console.log('Was clicked! boy');
        //Don't do this: this.state.people[2].name = 'leo'
        this.setState({
            people: [
                { name: 'Padre', age: 39},
                { name: 'Larissa', age: 20},
                { name: 'Leonardo', age: 17},
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React APP</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
                <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
            </div>
        );
    }
}
export default App;
