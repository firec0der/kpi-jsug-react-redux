import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE0 = {
  id: pseudoIds.pop(),
  slideTitle: "Sooo, what the hell is React?",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 4,
          sectionNum: 5,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>It's a simple lib for building UI</li>
  <li>Component</li>
  <li>Encourages immutability of data</li>
  <li>Encourages one-way data flow</li>
  <li>Virtual DOM</li>
  <li>It’s predictable!</li>
`
        },
        {
          id: pseudoIds.pop(),
          width: 8,
          sectionNum: 10,
          contentType: CONTENT_TYPES.IMAGE,
          content: '//dl.dropboxusercontent.com/s/el9v9mt22t8yw8h/react-bomb.jpg'
        }
      ]
    }
  ]
};
