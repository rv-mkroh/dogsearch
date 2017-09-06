import React from 'react';
import PropTypes from 'prop-types';

function DogList(props) {
  return (
    <ul>
      {props.dogs.map(function(dog, i){
        return (
          <li key={i}>{dog}</li>
        );

      }, this)}
    </ul>
  )

}

export default DogList;

DogList.PropTypes = {
  dogs: PropTypes.array.required
};