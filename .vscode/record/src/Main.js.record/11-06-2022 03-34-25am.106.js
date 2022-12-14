import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Form from './Form';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<App />}></Route>
      <Route exact path='/form' component={Form}></Route>
    </Switch>
  );
}

export default Main;