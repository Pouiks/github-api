import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image, Icon } from 'semantic-ui-react';
import './reposresult.scss';
// == Import
// Je n'arrive pas a importer correctement la lib SEMANTIC UI

// == Composant
const Result = (data) => (
  <Card>
    <Image src={data.owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.owner.name}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
);

// Result.propTypes = {

// };
// == Export
export default Result;
