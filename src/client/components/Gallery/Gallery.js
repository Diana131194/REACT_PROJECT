import React from 'react';
import { Lightbox } from 'react-modal-image';
import Image from '../Image';
import './Gallery.scss';
import {connect} from 'react-redux';
import GalleryActions from '../Gallery/actions';
import {List} from 'immutable'

class Gallery extends React.Component {


  static getGalleryWidth(){
    try {
      return document.body.clientWidth;
    } catch (e) {
      return 1000;
    }
  }


  render() {
    return (
      <div className="gallery-root">
        {this.props.images.map((img) => {
          return <Image
                    image={img}
                    galleryWidth={this.props.galleryWidth}/>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    images: new List(props.imgs),
    size: state['app'].get('size')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGalleryWidthEventHandler: (width) => {
      dispatch(GalleryActions.updateGalleryWidth(width));
    },
  
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
