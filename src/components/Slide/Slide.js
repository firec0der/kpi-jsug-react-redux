// import from vendor deps
import React, { PropTypes as toBe } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import mathjs from 'mathjs';

// import from styles
import './slide.scss';

// import from components
import { Section } from './Sections';

// import from constants
import { CONTENT_TYPES } from '../../constants/content';

// additional code
const contentTypes = Object.keys(CONTENT_TYPES).map((key) => CONTENT_TYPES[key]);

export default class Slide extends React.Component {

  static propTypes = {
    visibleSection: toBe.number,
    slide: toBe.shape({
      id: toBe.number,
      slideTitle: toBe.string,
      rows: toBe.arrayOf(
        toBe.shape({
          id: toBe.number,
          sections: toBe.arrayOf(
            toBe.shape({
              id: toBe.number,
              title: toBe.string,
              width: toBe.oneOf(mathjs.range(1, 12, true).toArray()),
              offset: toBe.oneOf(mathjs.range(1, 12, true).toArray()),
              sectionNum: toBe.number,
              sectionOpts: toBe.object,
              contentType: toBe.oneOf(contentTypes),
              content: toBe.string
            })
          )
        })
      )
    })
  };

  static defaultProps = {
    visibleSection: 1
  }

  renderRow(row) {
    return (
      <Row key={row.id}>
        {row.sections.map((section) =>
          <Col mdOffset={section.offset} md={section.width} key={section.id}>
            {section.sectionNum <= this.props.visibleSection
              ? <Section
                  title={section.title}
                  type={section.contentType}
                  content={section.content}
                  sectionOpts={section.sectionOpts} />
              : null}
          </Col>
        )}
      </Row>
    );
  }

  render() {
    const { slide, slide: { slideTitle, rows } } = this.props;

    return (
      <div className="slide">
        <PageHeader>{slideTitle}</PageHeader>

        <Grid fluid>
          {rows.map((row) => this.renderRow(row))}
        </Grid>
      </div>
    );
  }

}
