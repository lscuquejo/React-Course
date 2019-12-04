import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [ peopleState, setPeopleState ] = useState({
        people: [
            { name: 'Padre', age: 39},
            { name: 'Lari', age: 20},
            { name: 'Leo', age: 17},
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    const switchNameHandler = () => {
        console.log('Was clicked! boy');
        //Don't do this: this.state.people[2].name = 'leo'
        setPeopleState({
            people: [
                {name: 'Padre', age: 39},
                {name: 'Larissa', age: 20},
                {name: 'Leonardo', age: 17},
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React APP</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={peopleState.people[0].name} age={peopleState.people[0].age}/>
            <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>My Hobbies: Racing</Person>
            <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
        </div>
    );
}

export default app;

// state = {
//     people: [
//         { name: 'Padre', age: 39},
//         { name: 'Lari', age: 20},
//         { name: 'Leo', age: 17},
//     ],
//     otherState: 'some other value'
// }
//
// switchNameHandler = () => {
//     console.log('Was clicked! boy');
//     //Don't do this: this.state.people[2].name = 'leo'
//     this.setState({
//         people: [
//             { name: 'Padre', age: 39},
//             { name: 'Larissa', age: 20},
//             { name: 'Leonardo', age: 17},
//         ]
//     })
