import React from 'react';

const person = (props) => {
   
   return (
   
    <div>
        <p>I'm {props.name} Person and I am {props.age} year olds</p>
        <p>{props.children}</p>
    </div>
    
    );
}
export default person;