import React, { Component } from 'react';
import Auxillary from './Auxillary';

class Nav extends Component {
    render() {
      return (
        <Auxillary>
          <div className="fixed-nav">
          <nav>
            <div className="header-row clearfix">
            <img src="resources/favicons/logo.png" alt="Kiski logo" className="logo" onClick={this.props.drawerToggleClicked} />
            <img src="resources/favicons/hamburger.png" alt="hamburger logo" className="hamburger" onClick={this.props.drawerToggleClicked} />
            <h1>Kiski Photography</h1>
                  <ul className="main-nav">
                     <li>
                       <a href="#" >Home</a>
                     </li>
                     <li>
                      <a href="#about" >About</a>
                     </li>
                     <li>
                       <a href="#gallery" onClick={this.props.gralleryClick}>Gallery</a>
                     </li>
                     <li>
                       <a href="#testimonals" >Testimonals</a>
                     </li>
                     <li>
                       <a href="#contact" >Contact Us</a>
                     </li>
                  </ul>
            </div>
           </nav>
           </div>
           </Auxillary>
      );
    }
  }
  
  export default Nav;
  