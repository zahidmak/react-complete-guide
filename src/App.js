import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Max",age:"28"},
      {name:"Manu",age:"29"},
      {name:"Stephanie",age:"26"}
  ]
  }

  switchNameHandler = (newName) => {
   // console.log('Was clicked');
   //DONT do this this.state.persons[0].name="Max million";
   this.setState({persons:[
    {name:newName,age:"28"},
    {name:"Manu",age:"29"},
    {name:"Stephanie",age:"29"}]})
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I am a react app</h1>
       <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
       <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!')}>My hobby is x</Person>
       <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
