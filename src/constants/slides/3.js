import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE3 = {
  id: pseudoIds.pop(),
  slideTitle: "Components",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          title: 'Lifecycle methods',
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>componentWillMount</li>
  <li>componentDidMount</li>
  <li>componentWillReceiveProps</li>
  <li>shouldComponentUpdate</li>
  <li>componentWillUpdate</li>
  <li>componentDidUpdate</li>
  <li>componentWillUnmount</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.CODE,
          content:
`import React from 'react';

class SomeComponent extends React.Component {

  componentWillMount() {
    console.log("I'm going to render");
  }

  componentDidMount() {
    console.log("I'm already rendered");
  }

  componentWillReceiveProps(nextProps) {
    console.log("I'm going to receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I re-render?");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("I'm going to re-render");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I've just re-rendered");
  }

  componentWillUnmount() {
    console.log("I'm going out of DOM");
  }

  render() {
    return (
      <div>Hi there!</div>
    );
  }
};

`
        }
      ]
    }
  ]
};
