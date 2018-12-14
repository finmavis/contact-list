import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Home';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

import GlobalStyle from './components/styles/Global';

const Container = styled.div`
  width: 100%;
  max-width: 41rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-family: inherit;
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  padding: 4rem 0 1rem;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Heading>Contact Book</Heading>
          <Switch>
            <Route path='/edit/:id' component={EditContact} />
            <Route path='/new' component={NewContact} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(App);
