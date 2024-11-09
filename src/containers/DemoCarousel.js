import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../../src/components/images/navet.png";
import img2 from "../../src/components/images/salade.png";

class DemoCarousel extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <Carousel>
          <div>
            <img src={img1} alt="img" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={img2} alt="img" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
