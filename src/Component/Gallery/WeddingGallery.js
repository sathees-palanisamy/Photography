import React, { Component } from 'react';
import ImageGallery from '../util/ImageGallery';

const images = [
  {src: "resources/Photos/Weddings/1.jpg"},
  {src: "resources/Photos/Weddings/2.jpg"},
  {src: "resources/Photos/Weddings/3.jpg"},
  {src: "resources/Photos/Weddings/4.jpg"},
  {src: "resources/Photos/Weddings/5.jpg"},
  {src: "resources/Photos/Weddings/6.jpg"},

 
];

class WeddingGallery extends Component {
    render() {
      return (
    <div className="home-page">
        <ImageGallery initialStep={1} images={images} />
    </div>
      );
    }
  }
  
  export default WeddingGallery;
  