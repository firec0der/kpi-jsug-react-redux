import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE14 = {
  id: pseudoIds.pop(),
  slideTitle: "Flux",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.IMAGE,
          title: 'Naked Flux',
          content: 'https://cask.scotch.io/2014/10/V70cSEC.png'
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 1,
          contentType: CONTENT_TYPES.IMAGE,
          title: 'Flux in real life',
          content: 'http://likethemammal.github.io/reacttalk/images/diagrams/flux-diagram.png'
        }
      ]
    }
  ]
};
