import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} Person and I am {this.props.age} year olds</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxiliary>
        )
   
           
    }
  
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
}
export default withClass(Person,classes.Person);;