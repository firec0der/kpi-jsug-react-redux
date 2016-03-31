import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  HelloWorld,
  NotFound
} from '../components';

import { Slider } from '../containers';

export const productionBaseUrl = '/jsug/share/1-react/1-ivan-stetsenko-react-redux/';
export const devBaseUrl = '/';
const env = process.env.NODE_ENV;

import { url } from '../utils/urls';

export default (
  <Route path={url('/')} component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path={url('/slides')} component={Slider} />
    <Route path="*" component={NotFound} />
  </Route>
);
