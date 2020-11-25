import React, {Component} from 'react';

import classes from './Person.css';


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
   
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} Person and I am {this.props.age} year olds</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
            
            );
    }
  
}
export default Person;