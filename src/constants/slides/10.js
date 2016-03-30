import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE10 = {
  id: pseudoIds.pop(),
  slideTitle: "Oh, again!?",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          offset: 3,
          sectionNum: 0,
          contentType: CONTENT_TYPES.IMAGE,
          content: 'https://cdn-images-1.medium.com/max/800/1*MRPl_SNuRGJchb6eOAnkSA.jpeg'
        }
      ]
    }
  ]
};
