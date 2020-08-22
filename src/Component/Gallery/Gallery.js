import React, { Component } from 'react';
import PrePostGallery from './PrePostGallery';
import WeddingGallery from './WeddingGallery';
import EventGallery from './EventGallery';
import FashionGallery from './FashionGallery';


class Gallery extends Component {

    render() {
        let renderDisplay;
        if (this.props.renderUi === 'initial') {
            renderDisplay = <div>
           <ul className="gallery-showcase clearfix">
                  <li>
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Fashion/18.jpg" alt="Fashion" onClick={this.props.fashionClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.fashionClick}>Fashion</div>
                  </li>
                  <li>
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Events/5.jpg" alt="Events" onClick={this.props.eventClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.eventClick}>Events</div>
                  </li>
                  <li>
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Weddings/4.jpg" alt="Weddings" onClick={this.props.weddingClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.weddingClick}>Weddings</div>
                  </li>
                  <li>
                      <figure className="gallery-photo">
                          <img src="resources/Photos/Prefunction/3.jpg" alt="Pre(Post)Wedding" onClick={this.props.prePostClick}/>
                      </figure>
                      <div className="btn-full" onClick={this.props.prePostClick}>Pre(Post)Wedding</div>
                  </li>
              </ul>
          </div>
        }

         if (this.props.renderUi === 'fashion') {
            renderDisplay = <FashionGallery />
         }

         if (this.props.renderUi === 'event') {
            renderDisplay = <EventGallery />
         }

         if (this.props.renderUi === 'wedding') {
            renderDisplay = <WeddingGallery />
         }

         if (this.props.renderUi === 'prePost') {
            renderDisplay = <PrePostGallery />
         }
    

      return (
        <section id="gallery" className="section-gallery">
        <div className="row">
              <h2>Capture It All…</h2>
        </div>
        <div>{renderDisplay}</div>
        <div></div>
        <div className="btn-small">
            <div onClick={this.props.resetGalleryClick}>Reset</div>
        </div>
        </section>
      );
    }
  }
  
  export default Gallery;
  