import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE11 = {
  id: pseudoIds.pop(),
  slideTitle: "My short story",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 4,
          offset: 4,
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`<ul>
  <li>I moved to front-end without experience</li>
  <li>Project with React && Redux</li>
  <li>Hate front-end, especialy JavaScript X(</li>
  <li>WTF condition during the first sprint</li>
</ul>
`
        }
      ]
    }
  ]
};
