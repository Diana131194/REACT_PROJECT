import React from 'react';
import {connect} from 'react-redux';
import GalleryActions from '../Gallery/actions';

import './Image.scss';

class Image extends React.Component {
  calcImageSize() {
    const galleryWidth = this.props.galleryWidth;
    const targetSize = 200;
    const imagesPerRow = Math.round(galleryWidth / targetSize);
    return galleryWidth / imagesPerRow;
  }

  render() {
    let size = this.calcImageSize();
    return (
      <div
        className="image-root"
        style={{
          backgroundImage: `url(${this.props.image})`,
          width: size + 'px',
          height: size + 'px'
        }}
      >
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    image: props.image,
    size: state['app'].get('size'),
    galleryWidth: state['gallery'].get('galleryWidth')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
