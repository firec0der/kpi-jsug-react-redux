import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE20 = {
  id: pseudoIds.pop(),
  slideTitle: "Questions?",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content: ''
        }
      ]
    }
  ]
};
