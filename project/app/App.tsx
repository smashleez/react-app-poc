import React, {  } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Page1, Page2 } from './areas';

const App = (): JSX.Element => {
  return (
      <Container id="app-container">
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </Container>
  );
};

export default App;
