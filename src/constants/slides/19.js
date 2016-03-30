import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE19 = {
  id: pseudoIds.pop(),
  slideTitle: "The Must-Reads",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li><a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes">Redux course notes</a></li>
  <li><a href="http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html">Full-stack Redux tutorial</a></li>
  <li><a href="https://habrahabr.ru/post/217295/">Diff algorithm, React</a></li>
  <li><a href="https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#9bed">React.js pure render performance anti-pattern</a></li>
  <li><a href="https://medium.com/airbnb-engineering/enzyme-javascript-testing-utilities-for-react-a417e5e5090f#.d63pqwhun">Enzyme: JavaScript Testing utilities for React</a></li>
</ul>
`
        }
      ]
    }
  ]
};
