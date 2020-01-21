import React from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Jumbotron,  Container,  Button,  Navbar, Nav, Card } from 'react-bootstrap';
import './App.css';

import homepage from './homepage';
import aboutpage from './aboutpage';
import supportpage from './supportpage';
const Home = homepage;
const About = aboutpage;
const Support = supportpage;

const App = () => (
  <BrowserRouter>
    <Container className="p-3">
      <Jumbotron>
        <h6 className="header">
        <span role="img" aria-label="paella-emoji">🥘&nbsp;</span>
        Cooking w/ React-Bootstrap</h6>

          <Navbar className="custom-btn-toolbar">
            <Nav.Link as={Link} to="/">
              <Button>Home</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <Button>About</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/support">
              <Button>Support</Button>
            </Nav.Link>
          </Navbar>

      </Jumbotron>
      <Card className="mx-5 p-3">
      <p>
        This Page ={' '}
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/support"><Support /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </p>
      </Card>
    </Container>
  </BrowserRouter>
);

export default App;
