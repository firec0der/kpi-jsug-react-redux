// import from vendor deps
import React, { PropTypes as toBe } from 'react';
import classNames from 'classNames';

// import from styles
import './section.scss';

// import from components
import { CodeSection, PlainHtmlSection, ImageSection } from '../';

// import from constants
import { CONTENT_TYPES } from '../../../../constants/content';

// additional code
const contentTypes = Object.keys(CONTENT_TYPES).map((key) => CONTENT_TYPES[key]);

export default class Section extends React.Component {

  static propTypes = {
    title: toBe.string,
    content: toBe.string,
    type: toBe.oneOf(contentTypes),
    sectionOpts: toBe.object
  };

  renderImageSection() {
    const { content: source } = this.props;
    return (
      <ImageSection source={source} rounded responsive />
    );
  }

  renderCodeSection() {
    const { content } = this.props;
    return (
      <CodeSection lang="javascript">
        {content}
      </CodeSection>
    );
  }

  renderPlainHtmlSection() {
    const { content } = this.props;
    return (
      <PlainHtmlSection content={content} />
    );
  }

  getSectionsContent() {
    const { type } = this.props;

    switch (true) {
      case type === CONTENT_TYPES.IMAGE:
        return this.renderImageSection();
      case type === CONTENT_TYPES.CODE:
        return this.renderCodeSection();
      case type === CONTENT_TYPES.PLAIN_HTML:
        return this.renderPlainHtmlSection();
      default:
        return null;
    }
  }

  render() {
    const { title, sectionOpts } = this.props;

    const sectionClassName = sectionOpts && sectionOpts.className
      ? classNames('section', sectionOpts.className)
      : 'section';
    return (
      <section {...sectionOpts} className={sectionClassName}>
        {title && <h3>{title}</h3>}
        {this.getSectionsContent()}
      </section>
    );
  }

}
