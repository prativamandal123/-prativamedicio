import React from 'react';

const About = () => {
  return (
    <div className='about py-5'>
      <div className='container'>
        <h1 className='text-center fs-2'>About Us</h1>
        <div className='lined my-3'></div>
        <p className='text-center'>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        
        <div className='row align-items-center py-4'>
          {/* Video Section */}
          <div className='col-12 col-md-6 '>
            <div className='video-container'>
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/Y7f98aduVJ8"
                title="About Us Video"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Text Section */}
          <div className='col-12 col-md-6'>
            <h2 className='fw-bold fs-4'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className=''>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
            <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
