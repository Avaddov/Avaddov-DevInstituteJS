import React from 'react';

function UserFavoriteColors(props) {
  const { favAnimals } = props;
  const animalList = favAnimals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));
  return <ul>{animalList}</ul>;
}

export default UserFavoriteColors;
