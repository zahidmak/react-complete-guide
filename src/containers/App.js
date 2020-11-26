import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructure');
  }

  state = {
    persons: [
      { id: "asd", name: "Manu", age: "29" },
      { id: "ss", name: "Max", age: "28" },
      { id: "sfas", name: "Stephanie", age: "26" }
    ],
    otherState:'some other value',
    showPersons:false,
    showCockpit:true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  //This has been removed.
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons
    })
  }
  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; ///NOTE: By using spread operator you are copying the array and not using its reference and hence not modifying the original state
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        personsLength={this.state.persons.length}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />

    }



    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        {this.state.showCockpit ?  <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglerPersonsHandler} />
        : null}
       
        {persons}
      </WithClass>
    );
  }
}

export default App;
