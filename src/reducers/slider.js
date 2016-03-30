import {
  NEXT_SLIDE,
  PREV_SLIDE,
  NEXT_SECTION,
  PREV_SECTION
} from '../actions/slider';

import { SLIDES } from '../constants/slides';

import { nextSectionNum, prevSectionNum, firstSectionNum } from '../utils/slides';

const initialState = {
  list: SLIDES,
  currentSlide: 0,
  currentSection: firstSectionNum(SLIDES[0])
};

export default function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide + 1,
        currentSection: firstSectionNum(state.list[state.currentSlide + 1])
      };

    case PREV_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide === 0 ? 0 : state.currentSlide - 1,
        currentSection: firstSectionNum(state.list[
          state.currentSlide === 0 ? 0 : state.currentSlide - 1
        ])
      };

    case NEXT_SECTION:
      return {
        ...state,
        currentSection: nextSectionNum(state.list[state.currentSlide], state.currentSection)
      };

    case PREV_SECTION:
      return {
        ...state,
        currentSection: state.currentSection === 0
          ? 0
          : prevSectionNum(state.list[state.currentSlide], state.currentSection)
      };

    default:
      return state;
  }
}
