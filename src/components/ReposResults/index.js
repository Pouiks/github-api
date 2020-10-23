// == Import npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Result from './result';
import './reposresults.scss';

// == Import

// == Composant
const ReposResults = ({ dataToLoad }) => {
  console.log('JE SUIS DANS REPOSRESULT:', dataToLoad);

  return (
    <div className="results">
      {

        dataToLoad.map((data) => (

          <Result key={data.id} data={data} />

        ))
      }
    </div>
  );
};

// // == Export
export default ReposResults;
