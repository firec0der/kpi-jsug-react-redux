import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE1 = {
  id: pseudoIds.pop(),
  slideTitle: "React propose the new vision of a UI.",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          title: 'Some other UI',
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>HTML-driven JavaScript</li>
  <li>HTML + CSS — Presentation layer</li>
  <li>JavaScript — Logic layer</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          title: "React'ive UI",
          sectionNum: 1,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>JavaScript-driven HTML</li>
  <li>HTML + CSS + JavaScript — Single source of truth.</li>
</ul>
`
        }
      ]
    }
  ]
};
