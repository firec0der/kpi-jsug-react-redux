import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE15 = {
  id: pseudoIds.pop(),
  slideTitle: "Redux",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          title: 'Ideas',
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>Single source of truth. Single Store.</li>
  <li>State is read-only. Emit an action to mutate the state.</li>
  <li>All mutations are pure functions — <b>reducers</b>.</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          title: 'How it works',
          contentType: CONTENT_TYPES.IMAGE,
          content: 'https://cdn-images-1.medium.com/max/800/1*CBfav7WP_SuV_UV87N1_Og.png'
        }
      ]
    }
  ]
};
