import React from 'react';

const CarouselSlider = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade border mb-5"
      style={{ width: '100%', margin: '0 auto' }}
      data-bs-ride="carousel" 
      data-bs-interval="2000" 
    >
      <div className="carousel-inner">

     
        <div className="carousel-item active">
          <img
            src="https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-3.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex justify-content-center align-items-center " style={{ padding: '20px' }}>
            <div className="bg-light p-4 sliderbordertop  " style={{ maxWidth: '1000px', width: '150%', margin: ' 40px 0' }}>
              <h1 className='text-dark'>Temporibus autem quibusdam</h1>
              <p className='text-dark'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
              <button className='btn sliderbtn'>Read More</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-1.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
            <div className="bg-light p-4  sliderbordertop " style={{ maxWidth: '900px', width: '100%', margin: '40px 0' }}>
              <h1 className='text-dark'>Welcome to Medicio</h1>
              <p className='text-dark'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
              <button className='btn sliderbtn'>Read More</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://bootstrapmade.com/content/demo/Medicio/assets/img/hero-carousel/hero-carousel-2.jpg"
            className="d-block w-100"
            alt="Slide 3"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
            <div className="bg-light p-4 sliderbordertop " style={{ maxWidth: '900px', width: '100%', margin: '40px 0'   }}>
              <h1 className='text-dark'>At vero eos et accusamus</h1>
              <p className='text-dark'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
              <button className='btn sliderbtn'>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev prevbtn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next nextbtn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
    </div>
  );
};

export default CarouselSlider;
