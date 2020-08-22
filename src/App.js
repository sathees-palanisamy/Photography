import React, { Component } from 'react';
import Nav from './Component/Navigation/Nav';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Gallery from './Component/Gallery/Gallery';
import Testimonals from './Component/Testimonals/Testimonals';
import Contact from './Component/Contact/Contact';
import FooterPage from './Component/Footer/FooterPage';
import SideDrawer from './Component/Navigation/sideDrawer';

import './App.css';

/* updated CSS File */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {renderUi: 'initial',
    showSideDrawer: false,
    };

    this.fashionClick = this.fashionClick.bind(this);
    this.eventClick = this.eventClick.bind(this);
    this.weddingClick = this.weddingClick.bind(this);
    this.prePostClick = this.prePostClick.bind(this);
    this.gralleryClick = this.gralleryClick.bind(this);
  }

  fashionClick() {
    this.setState(state => ({
        renderUi: 'fashion'
    }));
  }

  eventClick() {
    this.setState(state => ({
        renderUi: 'event'
    }));
  }

  weddingClick() {
    this.setState(state => ({
        renderUi: 'wedding'
    }));
  }

  prePostClick() {
    this.setState(state => ({
        renderUi: 'prePost'
    }));
  }

  gralleryClick() {
    this.setState(state => ({
        renderUi: 'initial'
    }));

    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );

  }

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  resetGalleryClick = () => {
    this.setState(state => ({
      renderUi: 'initial'
    }));
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
   }

   backDropToggle = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
      } );
   }

  render() {
    return (
      <>
          <Nav gralleryClick={this.gralleryClick} drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
            gralleryClick={this.gralleryClick}
            backDropToggle={this.backDropToggle}
           />
          <Home />
          <About />
          <Gallery
           renderUi={this.state.renderUi}
           fashionClick={this.fashionClick}
           eventClick={this.eventClick}
           weddingClick={this.weddingClick}
           prePostClick={this.prePostClick}
           resetGalleryClick={this.resetGalleryClick}
           />
          <Testimonals />
          <Contact />
          <FooterPage gralleryClick={this.gralleryClick}/>
      </>
    );
  }
}

export default App;
