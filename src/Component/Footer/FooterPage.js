import React, { Component } from 'react';

class FooterPage extends Component {
    render() {
      return (
    <div className="footer-page">
            <div className="row">
                <p>
                    Copyright &copy; 2019 by kiskiPhotography. All rights reserved.
                </p>
            </div>
            <div className="row">
                <ul className="social-links">
                        <li><a href="https://en-gb.facebook.com/Kiskiphotography/"><i className="icon ion-logo-facebook"></i></a></li>
                        <li><a href="https://en-gb.facebook.com/Kiskiphotography/"><i className="icon ion-logo-twitter"></i></a></li>
                        <li><a href="https://en-gb.facebook.com/Kiskiphotography/"><i className="icon ion-logo-googleplus"></i></a></li>
                        <li><a href="https://en-gb.facebook.com/Kiskiphotography/"><i className="icon ion-logo-instagram"></i></a></li>
                    </ul>
            </div>
    </div>
      );
    }
  }
  
  export default FooterPage;
  