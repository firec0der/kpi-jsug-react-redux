export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const NEXT_SECTION = 'NEXT_SECTION';
export const PREV_SECTION = 'PREV_SECTION';

export const nextSlide = () => ({ type: NEXT_SLIDE });
export const prevSlide = () => ({ type: PREV_SLIDE });

export const nextSection = () => ({ type: NEXT_SECTION });
export const prevSection = () => ({ type: PREV_SECTION });
