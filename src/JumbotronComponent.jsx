/* eslint-disable react/prop-types */
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function JumbotronComponent({ children }) {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>{children}</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;
