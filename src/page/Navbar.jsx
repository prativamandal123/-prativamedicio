import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand  fw-bold logtext" href="#" style={{ color: '#3fbbc0' }}>
            M<span className='text-dark'>EDICIO</span>
          </a>
        <button
          className="navbar-toggler border-0 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body ms-auto mb-2 mb-lg-0 taxt-list">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">DEPARTMENTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctorCard">DOCTORS</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DROPDOWN
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" aria-disabled="true">CONTACT</Link>
              </li>
            </ul>

           
        </div>
        
        </div>
        <Link to="/appointment">
              <button className="btn nav-btn text-light me-auto " type="button">
                Make An Appointment
              </button>
            </Link>
      </div>
    </nav>
  );
}

export default Navbar;
