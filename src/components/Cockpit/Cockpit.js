import React,{useEffect} from 'react';

import classes from './Cockpit.css';


const cockpit = (props) =>{
    useEffect(()=>{
     console.log('[Cockpit.js] userEffect');
     //Http request....
     setTimeout(()=>{
      alert('Saved data to cloud!');
     });
    return () => {
      console.log('[Cockpit.js] cleanup work in userEffect')
    }
    },[]); //[props.persons] //only runs when props.persons is changed.
            // [] //will only run first time. 
            // you can add multiple fields
    useEffect(()=>{
      console.log('[Cockpit.js] 2nd userEffect');
      //Http request....
     
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd userEffect')
      }
    })
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Perons</button>
        </div>

    );
}

export default  React.memo(cockpit); //React will memroize the component and only re-renders it only it sprops are changes.