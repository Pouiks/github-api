import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import './message.scss';

const MessageDiv = () => (
<div className="messageDiv">
  <Message>
    <p> 546487 résultats chargés</p>
  </Message>
</div>
);

export default MessageDiv;
