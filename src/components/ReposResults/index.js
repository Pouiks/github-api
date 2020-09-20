// == Import npm
import React from 'react';
import Result from 'src/components/ReposResults';
import { Card, Image } from 'semantic-ui-react';
import './reposresults.scss';

// == Import

// == Composant
const ReposResults = ({ dataToLoad }) => {
  console.log('JE SUIS DANS REPOSRESULT:', dataToLoad);

  return (
    <div className="results">
      {

        dataToLoad.map((data) => (

          <Result key={data.id} {...data} />

        ))
      }
    </div>
  );
};

// // == Export
export default ReposResults;
