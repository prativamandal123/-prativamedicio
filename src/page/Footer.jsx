import React from 'react';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-4">
            <h2 className="footer-titlefrist">Medicio</h2>
            <ul className="footer-list">
              <li>A108 Adam Street</li>
              <li>New York, NY 535022</li>
              <li>Phone: +1 5589 55488 55</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h2 className="footer-title">Useful Links</h2>
            <ul className="footer-list">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h2 className="footer-title">Our Services</h2>
            <ul className="footer-list">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h2 className="footer-title">Hic solutasetp</h2>
            <ul className="footer-list">
              <li>Molestiae accusamus iure</li>
              <li>Excepturi dignissimos</li>
              <li>Suscipit distinctio</li>
              <li>Dilecta</li>
              <li>Sit quas consectetur</li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h2 className="footer-title">Nobis illum</h2>
            <ul className="footer-list">
              <li>Ipsam</li>
              <li>Laudantium dolorum</li>
              <li>Dinera</li>
              <li>Trodelas</li>
              <li>Flexo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footerline'><hr /></div>
      <div className='text-center'><p className='fs-0'>© Copyright <span className='fw-bold'>Medicio </span> All Rights Reserved</p></div>
      <div className='text-center mt-0'><p>Designed by <span style={{  color:"#3fbbc0" }}>BootstrapMade</span></p></div>
    </div>
  );
};

export default Footer;
