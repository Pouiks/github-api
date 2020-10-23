// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from 'src/components/SearchBar';
import MessageDiv from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// == Import
import logogithub from 'src/assets/images/logo-github.png';

import './styles.css';

// == Composant
const App = () => {
  const [value, setValue] = useState('');
  const [dataToLoad, setDataToLoad] = useState([]);

  const fetchData = () => {
    axios.get(`https://api.github.com/search/repositories?q=${value}`)
      .then((response) => {
        console.log('avant le set state:', dataToLoad);
        setDataToLoad(response.data.items);
        console.log('APRES LE SETSTATE', dataToLoad);
        // console.log('Apres le set state:', response.data.items);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Je suis HANDLESUBMIT: ', value);
    fetchData(event.target.value);
  };
  const onChangeData = (event) => {
    console.log('Je suis ONCHANGEDATA: ', event.target.value);
    setValue(event.target.value);
  };
  useEffect(() => {
    fetchData();
    console.log('je passe dans le useEffect');
  }, []);

  return (
    <div className="app">
      <div className="main">
        <img src={logogithub} alt="react logo" />
        <SearchBar handleSubmit={handleSubmit} value={value} onChangeData={onChangeData} />
        <MessageDiv />
        <ReposResults dataToLoad={dataToLoad} />
      </div>
    </div>
  );
};

// == Export
export default App;
