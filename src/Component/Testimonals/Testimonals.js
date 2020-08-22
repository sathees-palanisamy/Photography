import React, { Component } from 'react';

class Testimonals extends Component {
    render() {
      return (
        <section id="testimonals" className="section-testimonials" >
        <div className="row" >
            <h2>Our customers can't live without us</h2>
        </div>
        <div className="row">
            <div className="col span-1-of-3">
                <div className="blockquote1">
                Kishore is truly an outstanding photographer (and wonderful person) with an almost mystical ability to capture the true nature of people and events. I'd recommend him to anyone!
                    <div className="cite1"><img src="resources/favicons/cus1.jpg" alt="Customer 1" className="cite1img"/>Alberto Duncan</div>
                </div>
            </div>
            <div className="col span-1-of-3">
                <div className="blockquote1">
                Your photos are STUNNING! Thank you so, so much. They are all just spectacular and a gift we will treasure always. We are really grateful. You are just amazing., Kishore. Just a talented photographer. 
                    <div className="cite1"><img src="resources/favicons/cus2.jpg" alt="Customer 2" className="cite1img"/>Joana Silva</div>
                </div>
            </div>
            <div className="col span-1-of-3">
                <div className="blockquote1">
                Wow! You have been such a pleasure to work with and to get to know! You and your photos are so beyond expectations. I love that you don't just take pictures, you capture moments.
                <div className="cite1"><img src="resources/favicons/cus3.jpg" alt="Customer 3" className="cite1img"/>Anna Chapman</div>
                </div>
            </div>
        </div>

    </section>
  
      );
    }
  }
  
  export default Testimonals;
  