import React, { Component } from 'react';
import ImageGallery from '../util/ImageGallery';


const images = [
  {src: "resources/Photos/Events/1.jpg"},
  {src: "resources/Photos/Events/2.jpg"},
  {src: "resources/Photos/Events/3.jpg"},
  {src: "resources/Photos/Events/4.jpg"},
  {src: "resources/Photos/Events/5.jpg"},
  {src: "resources/Photos/Events/6.jpg"},
  {src: "resources/Photos/Events/7.jpg"},
  {src: "resources/Photos/Events/8.jpg"},
  {src: "resources/Photos/Events/9.jpg"},
  {src: "resources/Photos/Events/10.jpg"},
  {src: "resources/Photos/Events/11.jpg"},
];

class EventGallery extends Component {
    render() {
      return (
    <div className="home-page">
        <ImageGallery initialStep={1} images={images} />
    </div>
      );
    }
  }
  
  export default EventGallery;
  