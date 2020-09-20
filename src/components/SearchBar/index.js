// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchbar.scss';
import { Input } from 'semantic-ui-react';

// == Import
// Je n'arrive pas a importer correctement la lib SEMANTIC UI

// == Composant
const SearchBar = ({ handleSubmit, onChangeData, value }) => (
  <form
    className="SearchBar"
    onSubmit={(event) => {
      handleSubmit(event);
    }}
  >

    <Input
      icon={{ name: 'search', position: 'left' }}
      type="text"
      placeholder="Inscrivez ici votre recherche"
      value={value}
      onChange={(event) => {
        onChangeData(event);
      }}
    />
  </form>
);
// == Export
export default SearchBar;
