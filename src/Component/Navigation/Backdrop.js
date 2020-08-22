import React from 'react';

const Backdrop = (props) => (
    props.show ?
    <div className="Backdrop">
      <div className="subTitle">
     <img src="resources/favicons/logo.png" alt="Kiski logo" className="SideDrawerlogo"  />
     <p><b>Capture It All</b></p>
     </div>
    <ul className="side-nav">

             <li>  
             <i className="ion-md-home icon-small"></i>
                         <a href="#" onClick={props.backDropToggle} ><b>Home</b></a>
                       </li>
                       <li>
                       <i className="ion-md-person icon-small"></i>
                          <a href="#about" onClick={props.backDropToggle} ><b>About</b></a>
    </li>
    <li>
    <i className="ion-md-photos icon-small"></i>
      <a href="#gallery" onClick={props.gralleryClick}><b>Gallery</b></a>
    </li>
    <li>
    <i className="ion-ios-trophy icon-small"></i>
      <a href="#testimonals" onClick={props.backDropToggle} ><b>Testimonals</b></a>
    </li>
    <li>
    <i className="ion-ios-mail icon-small"></i>
      <a href="#contact" onClick={props.backDropToggle} ><b>Contact Us</b></a>
    </li>
    </ul>
    </div>
    : null
);

export default Backdrop;