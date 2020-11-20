import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons:[
      {name:"Max",age:"28"},
      {name:"Manu",age:"29"},
      {name:"Stephanie",age:"26"}
  ]
  })

  const switchNameHandler = () => {
    // console.log('Was clicked');
    //DONT do this this.state.persons[0].name="Max million";
    setPersonsState({persons:[
     {name:"Zahid",age:"28"},
     {name:"Manu",age:"29"},
     {name:"Stephanie",age:"29"}]})
   }
   console.log(personState);
 
    return (
      <div className="App">
       <h1>Hi, I am a react app</h1>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
       <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobby is x</Person>
       <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
  
}

export default app;

