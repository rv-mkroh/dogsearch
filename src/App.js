import React, { Component } from 'react';
import DogList from './DogList';
import SearchBar from './SearchBar';
import dogs from './dogs';
import './App.css';

class App extends Component {
  constructor() {
    // subclasses require super()
    super();

    // bind context for functions
    this.findDog = this.findDog.bind(this);

    // set initial state
    this.state = {
      searchTerm: ''
    };
  }

  findDog(event){
    // grab the value of the input
    const searchTerm = event.target.value;
    // copy state
    let copyOfState = Object.assign({}, this.state);
    // modify the copy
    copyOfState.searchTerm = searchTerm;
    // update state using copy
    this.setState(copyOfState);
  }

  render() {
    // get updated array of dogs based on searchTerm
    const filteredDogs = dogs.breeds.filter(function(dog){
      // compare lower to lower
      const thisDog = dog.toLowerCase();
      const searchTermLower = this.state.searchTerm.toLowerCase();
      // return match
      return thisDog.indexOf(searchTermLower) > -1;
    }, this);

    return (
      <div className="App">
        <h1>Dog Search</h1>
        <SearchBar value={this.state.searchTerm} handleChange={this.findDog} />
        <DogList dogs={filteredDogs} />
      </div>
    );
  }
}

export default App;
