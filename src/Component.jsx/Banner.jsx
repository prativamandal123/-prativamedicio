import React from 'react';


const Banner = () => {
  return (
    <div className="banner" style={{ backgroundColor: '#3fbbc0' }}>
      <div className="container text-center py-5 bannertext">
        <h1 className="display-4 text-white fs-2 fw-bold">In an emergency? Need help now?</h1>
        <p className="lead text-white">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="btn  btn-lg bannerbtn">Make an Appointment</button>
      </div>
    </div>
  );
};

export default Banner;
