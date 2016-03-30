import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE17 = {
  id: pseudoIds.pop(),
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          offset: 3,
          sectionNum: 0,
          title: 'Combine reducers',
          contentType: CONTENT_TYPES.CODE,
          content:
`import { combineReducers } from 'redux';
import sliderReducer from './slider';

const rootReducer = combineReducers({
  slides: sliderReducer
});

export default rootReducer;
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          offset: 3,
          sectionNum: 0,
          title: 'Store',
          contentType: CONTENT_TYPES.CODE,
          content:
`import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
`
        }
      ]
    }
  ]
};
