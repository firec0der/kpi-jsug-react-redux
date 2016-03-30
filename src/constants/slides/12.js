import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE12 = {
  id: pseudoIds.pop(),
  slideTitle: "Problems",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 4,
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`<ul>
  <li>Documentation and BRD's.</li>
  <li>A looot of logic.</li>
  <li>FP that looks like a magic.</li>
  <li>Fat containers.</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 8,
          sectionNum: 1,
          contentType: CONTENT_TYPES.CODE,
          title: 'Some map && reduce. Good night!',
          content:
`getSome() {
  const { someGroups, someGroupsMapping } = this.state;

  return Object.keys(someGroupsMapping).reduce((acc, groupName) => [
    ...acc,
    { _groupName: groupName, _rowRenderer: this.someGroupRowRenderer },
    ...(someGroups[groupName]
      ? someGroupsMapping[groupName].map(fund => ({
        ...fund,
        _rowRenderer: awesomeRowRenderer({ subItemRenderer: ::this.subItemRenderer })
      }))
      : [])
  ], []);
}
`
        }
      ]
    }
  ]
};
