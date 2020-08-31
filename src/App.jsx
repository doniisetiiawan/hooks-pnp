import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from 'react-bootstrap/Container';
import Products from './Products';
import JumbotronComponent from './JumbotronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

function App() {
  return (
    <div>
      <Container>
        <JumbotronComponent>
          This is a long sentence, and I want to insert
          content into the jumbotron component from the
          outside.
        </JumbotronComponent>
        <Products />
        <UserForm />
        <GitHub />
      </Container>
    </div>
  );
}

export default hot(App);
