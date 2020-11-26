import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    //This increases the performance as person component will not render if other components are updated.
    //This would have not worked if you did not used spread operator when updating state. Because arrays are reference type
    //Be careful when using this because in most of the cases you would want to update child component when parent component is updated.
    //Its a waste check if your child component that needs to be updated when parent is updated is more than 50%
    if(nextProps.persons!== this.props.person){
      return true;
    }else{
      return false
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  render() {
    console.log('[Personss.js] rendering...');
    return this.props.persons.map((person, index) => {

      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }

}
export default Persons;