import { CONTENT_TYPES } from '../content';
import { pseudoIds } from '../ids';

export const SLIDE2 = {
  id: pseudoIds.pop(),
  slideTitle: "Components",
  rows: [
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>Components are just views with some UI logic.</li>
  <li>A component can render another component(s).</li>
  <li>Simple JSX syntax.</li>
</ul>
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 1,
          contentType: CONTENT_TYPES.PLAIN_HTML,
          content:
`
<ul>
  <li>Components have state (or don't).</li>
  <li>Components can receive properties.</li>
</ul>
`
        }
      ]
    },
    {
      id: pseudoIds.pop(),
      sections: [
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 0,
          contentType: CONTENT_TYPES.CODE,
          content:
`import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <li>Some content.</li>
    );
  }

}

class List extends React.Component {

  render() {
    const list = [1, 2, 3];

    return (
      <ul>
        {list.map((item) => <ListItem />)}
      </ul>
    );
  }

}
`
        },
        {
          id: pseudoIds.pop(),
          width: 6,
          sectionNum: 1,
          contentType: CONTENT_TYPES.CODE,
          content:
`import React from 'react';

class ListItem extends React.Component {

  static propTypes = {
    item: React.PropTypes.shape({
      id: React.PropTypes.number,
      content: React.PropTypes.string
    });
  }

  render() {
    const { item } = this.props;
    return (
      <li key={item.id}>{item.content}</li>
    );
  }

}

class List extends React.Component {

  static propTypes = {
    items: React.PropTypes.arrayOf(shape({
      id: React.PropTypes.number,
      content: React.PropTypes.string
    })),
    someCondition: React.PropTypes.bool
  }

  contructor(props) {
    super(props);
    this.state = {
      opened: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.someCondition) { this.setState({opened: true}); }
  }

  render() {
    return (
      <ul>
        {this.state.opened &&
          this.props.items.map((item) => <ListItem item={item} />)}
      </ul>
    );
  }

}
`
        }
      ]
    }
  ]
};
