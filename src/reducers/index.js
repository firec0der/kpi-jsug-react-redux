import { combineReducers } from 'redux';

import sliderReducer from './slider';

const rootReducer = combineReducers({
  slides: sliderReducer
});

export default rootReducer;
