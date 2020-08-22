import React, { Component } from 'react';
import ImageGallery from '../util/ImageGallery';

const images = [
  {src: "resources/Photos/Prefunction/1.jpg"},
  {src: "resources/Photos/Prefunction/2.jpg"},
  {src: "resources/Photos/Prefunction/3.jpg"},
  {src: "resources/Photos/Prefunction/4.jpg"},
  {src: "resources/Photos/Prefunction/5.jpg"},
  {src: "resources/Photos/Prefunction/6.jpg"},
  {src: "resources/Photos/Prefunction/7.jpg"},
];

class PrePostGallery extends Component {
    render() {
      return (
    <div className="home-page">
        <ImageGallery initialStep={1} images={images} />
    </div>
      );
    }
  }
  
  export default PrePostGallery;
  