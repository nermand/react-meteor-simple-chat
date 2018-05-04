import React from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import SingleMessage from './SingleMessage';

const MessageList = props => {
  const { messages } = props;

  return (
    <React.Fragment>
      { messages.length > 0
        ? <pre>
            {messages.map(m => <SingleMessage key={m._id} message={m} />)}
          </pre>
        : <Well bsSize="large">Add a message and it will show up here</Well>
      }
    </React.Fragment>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array
};

export default MessageList;
