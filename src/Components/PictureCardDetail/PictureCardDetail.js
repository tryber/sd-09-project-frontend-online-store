import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GrPrevious, GrNext } from 'react-icons/gr';
import './PictureCardDetail.css';

class PictureCardDetail extends Component {
  constructor(props) {
    super(props);

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);

    this.state = {
      imgKey: 0,
    };
  }

  nextImage() {
    const { pictures } = this.props;
    const { imgKey } = this.state;
    if (imgKey < (pictures.length - 1)) {
      this.setState({ imgKey: imgKey + 1 });
    } else {
      this.setState({ imgKey: 0 });
    }
  }

  prevImage() {
    const { pictures } = this.props;
    const { imgKey } = this.state;
    if (imgKey > 0) {
      this.setState({ imgKey: imgKey - 1 });
    } else {
      this.setState({ imgKey: (pictures.length - 1) });
    }
  }

  render() {
    const { pictures, title } = this.props;
    const { imgKey } = this.state;
    return (
      <div className="productContanerDetail">
        <button type="button" className="changePictureButton" onClick={ this.prevImage }>
          <GrPrevious />
        </button>
        { pictures
          .map(({ url, id }) => (<img
            src={ url }
            alt={ `${title}` }
            key={ id }
          />))[imgKey]}
        <button
          type="button"
          className="changePictureButton"
          onClick={ this.nextImage }
        >
          <GrNext />
        </button>
      </div>
    );
  }
}

PictureCardDetail.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
};

export default PictureCardDetail;
