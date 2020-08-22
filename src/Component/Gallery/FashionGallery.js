import React, { Component } from 'react';
import ImageGallery from '../util/ImageGallery';

const images = [
  {src: "resources/Photos/Fashion/1.jpg"},
  {src: "resources/Photos/Fashion/2.jpg"},
  {src: "resources/Photos/Fashion/3.jpg"},
  {src: "resources/Photos/Fashion/4.jpg"},
  {src: "resources/Photos/Fashion/5.jpg"},
  {src: "resources/Photos/Fashion/6.jpg"},
  {src: "resources/Photos/Fashion/7.jpg"},
  {src: "resources/Photos/Fashion/8.jpg"},
  {src: "resources/Photos/Fashion/9.jpg"},
  {src: "resources/Photos/Fashion/10.jpg"},
  {src: "resources/Photos/Fashion/11.jpg"},
  {src: "resources/Photos/Fashion/12.jpg"},
  {src: "resources/Photos/Fashion/13.jpg"},
  {src: "resources/Photos/Fashion/14.jpg"},
  {src: "resources/Photos/Fashion/15.jpg"},
  {src: "resources/Photos/Fashion/16.jpg"},
  {src: "resources/Photos/Fashion/17.jpg"},
  {src: "resources/Photos/Fashion/18.jpg"},
  {src: "resources/Photos/Fashion/19.jpg"},
  {src: "resources/Photos/Fashion/21.jpg"},
  {src: "resources/Photos/Fashion/22.jpg"},
  {src: "resources/Photos/Fashion/23.jpg"},
  {src: "resources/Photos/Fashion/24.jpg"},
  {src: "resources/Photos/Fashion/25.jpg"},
  {src: "resources/Photos/Fashion/26.jpg"},
  {src: "resources/Photos/Fashion/27.jpg"},
  {src: "resources/Photos/Fashion/28.jpg"},
  {src: "resources/Photos/Fashion/29.jpg"},
  {src: "resources/Photos/Fashion/30.jpg"},
  {src: "resources/Photos/Fashion/31.jpg"},
  {src: "resources/Photos/Fashion/32.jpg"},
  {src: "resources/Photos/Fashion/33.jpg"},
  {src: "resources/Photos/Fashion/34.jpg"},
  {src: "resources/Photos/Fashion/35.jpg"},
  {src: "resources/Photos/Fashion/36.jpg"},
  {src: "resources/Photos/Fashion/37.jpg"},
  {src: "resources/Photos/Fashion/38.jpg"},
  {src: "resources/Photos/Fashion/39.jpg"},
  {src: "resources/Photos/Fashion/40.jpg"},


];

class FashionGallery extends Component {
    render() {
      return (
    <div className="home-page">
        <ImageGallery initialStep={1} images={images} />
    </div>
      );
    }
  }
  
  export default FashionGallery;
  