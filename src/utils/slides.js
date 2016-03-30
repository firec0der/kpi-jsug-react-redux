import _ from 'lodash-fp';

export function flattenSections(slide) {
  return slide.rows.reduce((acc, row) => {
    return [...acc, ...row.sections.reduce(
      (acc, section) => [...acc, section],
      []
    )];
  }, []);
}

const AscSectionsSort = (a, b) => a.sectionNum - b.sectionNum;

export function firstSectionNum(slide) {
  const firstSection = _.first(flattenSections(slide).sort(AscSectionsSort));
  return firstSection ? firstSection.sectionNum : undefined;
}

export function lastSectionNum(slide) {
  return slide.rows.reduce(
    (acc, row) => {
      const lastInRow = row.sections.reduce(
        (acc, section) => section.sectionNum > acc ? section.sectionNum : acc, 0
      );
      return lastInRow > acc ? lastInRow : acc;
    }, 0
  );
}

export function nextSectionNum(slide, currentSectionNum) {
  const nextSection = _.find(
    (section) => section.sectionNum > currentSectionNum,
    flattenSections(slide).sort(AscSectionsSort)
  );

  return nextSection ? nextSection.sectionNum : currentSectionNum;
}

export function prevSectionNum(slide, currentSectionNum) {
  const prevSection = _.findLast(
    (section) => section.sectionNum < currentSectionNum,
    flattenSections(slide).sort(AscSectionsSort)
  );

  return prevSection ? prevSection.sectionNum : currentSectionNum;
}
