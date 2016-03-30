import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE18 = {
  id: pseudoIds.pop(),
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          title: 'Connect all the stuff',
          contentType: CONTENT_TYPES.CODE,
          content:
`import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          title: 'Connect a container to Redux',
          contentType: CONTENT_TYPES.CODE,
          content:
`import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { nextSlide } from 'actions';

const mapStateToProps = (state) => ({
  slides: state.slides.list,
  currentSlide: state.slides.currentSlide,
  currentSection: state.slides.currentSection
});

export class Slider extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    currentSlide: PropTypes.number,
    currentSection: PropTypes.number,
    slides: PropTypes.array
  };

  nextSlide = () => {
    this.props.dispatch(nextSlide());
  };

  // Logic, render and other things are below
  ...
}

export default connect(mapStateToProps)(Slider);
`
        }
      ]
    }
  ]
};
