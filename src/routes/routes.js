import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  HelloWorld,
  NotFound
} from '../components';

import { Slider } from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="/slides" component={Slider} />
    <Route path="*" component={NotFound} />
  </Route>
);
