import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id:"asd", name: "Manu", age: "29" },
      {id:"ss", name: "Max", age: "28" },
      {id:"sfas", name: "Stephanie", age: "26" }
    ]
  }


  
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons
    })
  }
  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]; ///NOTE: By using spread operator you are copying the array and not using its reference and hence not modifying the original state
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
           return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })}

        </div>
      );
      style.backgroundColor =  'red';
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglerPersonsHandler}>Toggle Perons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
