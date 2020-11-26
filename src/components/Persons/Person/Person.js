import React, {Component. Fragment} from 'react';

import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'

class Person extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapShotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate')
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} Person and I am {this.props.age} year olds</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
        )
   
           
    }
  
}
export default Person;