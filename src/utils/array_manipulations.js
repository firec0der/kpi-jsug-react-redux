import _ from 'lodash-fp';

// bullshit
export const uniqueNumbers =
  (length, max) =>
    _.uniq(
      [...new Array(length)]
      .map(item => Math.round(Math.random() * max))
      .sort((a, b) => a - b)
    );
