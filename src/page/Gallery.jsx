import React from 'react';
import Slider from "react-slick";

const Gallery = () => {
 

  return (
    <>
      <div className='gallery'>
        <div className='container text-center'>
          <h1>Gallery</h1>
          <div className='lined'></div>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          <div className='row'>
            <Slider>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-7.jpg" alt="" />
              </div>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-8.jpg" alt="" />
              </div>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-9.jpg" alt="" />
              </div>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-10.jpg" alt="" />
              </div>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-11.jpg" alt="" />
              </div>
              <div>
                <img src="https://bootstrapmade.com/content/demo/Medicio/assets/img/gallery/gallery-12.jpg" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
