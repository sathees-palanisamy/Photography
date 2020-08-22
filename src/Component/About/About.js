import React, { Component } from 'react';

class About extends Component {
    render() {
      return (
         <section id="about">
        <div className="section-steps">
            <div className="row">
                <h2>WHO ARE WE</h2>
            </div>
         <div className="row">

            <div className="col span-2-of-5 steps-box">

               <img src="resources/favicons/kiski.jpg" alt="" className="app-screen"/>

            </div>

            <div className="col span-3-of-5 steps-box">
               
               <div className="works-step clearfix">
                  <h3>Who:</h3>
                  <p>
                     I Kishore Srinivasan, am the Founder of “Kiski Photography” and I have been into photography for several years. We photograph Weddings(Traditional & Candids), post and pre-wedding along with making fashion and kid portfolios. We make sure the moments are not only captured, but made.
                   </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>What:</h3>
                  <p>
                     Capturing candid moments, makes us stand out from others in this business. Service,Satisfaction and simple are the three strengths. We are not only specialised in shooting Candids at Indian Weddings(all religions) but also shooting fashion photography and new born kids.
                   </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>Where:</h3>
                  <p>
                  We shoot all over UK and India.
                   </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>Why:</h3>
                  <p>
                  Why in the world are we into photography? It’s the passion we have for what ever we do.
                  </p>
               </div>
      
            </div>
         </div>
        </div>
        </section>
      );
    }
  }
  
  export default About;
  