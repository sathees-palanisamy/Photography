import React, { Component } from 'react';
import ImageRenderer from '../util/ImageRenderer';

const images = [
  { src: "resources/Photos/Header/1.jpg"},
  { src: "resources/Photos/Header/7.jpg"},
  { src: "resources/Photos/Header/8.jpg"},
  { src: "resources/Photos/Header/9.jpg"},
  { src: "resources/Photos/Header/10.jpg"},
  { src: "resources/Photos/Header/12.jpg"},
  { src: "resources/Photos/Header/13.jpg"},
  { src: "resources/Photos/Header/14.jpg"},
  { src: "resources/Photos/Header/15.jpg"},
  { src: "resources/Photos/Header/16.jpg"},
  { src: "resources/Photos/Header/17.jpg"},
  { src: "resources/Photos/Header/20.jpg"},
];

class Home extends Component {
    render() {
      return (
    <div>
        <ImageRenderer initialStep={1} images={images} />
    </div>
      );
    }
  }
  
  export default Home;
  