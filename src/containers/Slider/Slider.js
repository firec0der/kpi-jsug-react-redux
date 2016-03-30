// import from vendor deps
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';

// import from styles
import './slider.scss';

// import from components
import { LeftRightNav, Slide } from '../../components';

// import from actions
import {
  nextSlide,
  prevSlide,
  nextSection,
  prevSection
} from '../../actions/slider';

// import from utils
import { firstSectionNum, lastSectionNum, nextSectionNum } from '../../utils/slides';

const mapStateToProps = (state) => ({
  slides: state.slides.list,
  currentSlide: state.slides.currentSlide,
  currentSection: state.slides.currentSection
});

export class Slider extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    currentSlide: PropTypes.number,
    currentSection: PropTypes.number,
    slides: PropTypes.array
  };

  nextSlide = () => {
    this.props.dispatch(nextSlide());
  };

  prevSlide = () => {
    this.props.dispatch(prevSlide());
  };

  nextSection = () => {
    this.props.dispatch(nextSection());
  };

  prevSection = () => {
    this.props.dispatch(prevSection());
  };

  renderNavigations() {
    const { slides, currentSlide, currentSection } = this.props;

    return (
      <Grid>
        <Row>
          <Col md={2} mdOffset={4}>
            <span className="nav-title">Slide</span>
            <LeftRightNav
              disableLeft={currentSlide === 0}
              disableRight={currentSlide === slides.length - 1}
              onClickRight={this.nextSlide}
              onClickLeft={this.prevSlide} />
          </Col>

          <Col md={2}>
            <span className="nav-title">Section</span>
            <LeftRightNav
              disableLeft={currentSection === firstSectionNum(slides[currentSlide], currentSection)}
              disableRight={currentSection === nextSectionNum(slides[currentSlide], currentSection)}
              onClickRight={this.nextSection}
              onClickLeft={this.prevSection} />
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    const { slides, currentSlide, currentSection } = this.props;

    return (
      <div className="slider">
        {this.renderNavigations()}
        <Slide slide={slides[currentSlide]} visibleSection={currentSection} />
      </div>
    );
  }

}

export default connect(mapStateToProps)(Slider);
