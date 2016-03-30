import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE16 = {
  id: pseudoIds.pop(),
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 4,
          sectionNum: 0,
          title: 'Action',
          contentType: CONTENT_TYPES.CODE,
          content:
`const action = {
  type: NEXT_SLIDE
};
`
        },
        {
          id: pseudoIds.pop(),
          width: 4,
          sectionNum: 0,
          title: 'Action creator',
          contentType: CONTENT_TYPES.CODE,
          content:
`const loadSlide = (num) => ({
  type: LOAD_SLIDE,
  payload: {
    slideNum: num
  }
});
`
        },
        {
          id: pseudoIds.pop(),
          width: 4,
          sectionNum: 0,
          title: 'Reducer',
          contentType: CONTENT_TYPES.CODE,
          content:
`const initState = {
  list: [ /* Array of slides (Objects) */ ],
  currentSlide: 0,
  currentSection: 0
};

const sliderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEXT_SLIDE':
      return {
        currentSlide: ++state.currentSlide,
        currentSection: 0
      }
    default:
      return state;
  }
};
`
        }
      ]
    }
  ]
};
