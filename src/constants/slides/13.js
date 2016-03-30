import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE13 = {
  id: pseudoIds.pop(),
  slideTitle: "Noice!",
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
`<ul>
  <li>A lot of JavaScript, a little bit of a framework-specific code.</li>
  <li>Everything is isolated.</li>
  <li>You should think about architecture.</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 1,
          contentType: CONTENT_TYPES.IMAGE,
          content: 'http://i.giphy.com/RgfGmnVvt8Pfy.gif'
        }
      ]
    }
  ]
};
