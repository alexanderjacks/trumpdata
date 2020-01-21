import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Home = () => <div><span role="img" aria-label="house-emoji">🏡&nbsp;</span><span>Home</span></div>;

const About = () => <div><span role="img" aria-label="scroll-emoji">📜&nbsp;</span><span>About</span></div>;

const Users = () => <div><span role="img" aria-label="persons-emoji">👥&nbsp;</span><span>Users</span></div>;

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
        <span role="img" aria-label="paella-emoji">🥘&nbsp;</span>
        Cooking w/ React-Bootstrap</h1>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Jumbotron>
      <Card className="mx-5 p-3">
      <h2>
        This Page ={' '}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </h2>
      </Card>
    </Container>
  </MemoryRouter>
);

export default App;
