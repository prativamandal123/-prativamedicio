import React from 'react';


const Appointment = () => {
  return (
    <div className='appointment py-5'>
      <div className='container'>
        <h1 className='text-center mb-4'>MAKE AN APPOINTMENT</h1>
        <div className='lined mb-4'></div>
        <p className='text-center mb-5'>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className='row'>
          <div className='col-12 col-md-4 mb-3'>
            <input type="text" className='form-control' placeholder='Your Name' />
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <input type="email" className='form-control' placeholder='Your Email' />
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <input type="tel" className='form-control' placeholder='Your Phone' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-4 mb-3'>
            <input type="date" className='form-control' />
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <select className='form-control'>
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              {/* Add more departments as needed */}
            </select>
          </div>
          <div className='col-12 col-md-4 mb-3'>
            <select className='form-control'>
              <option value="">Select Doctor</option>
              <option value="dr-smith">Dr. Smith</option>
              <option value="dr-jones">Dr. Jones</option>
              <option value="dr-brown">Dr. Brown</option>
              {/* Add more doctors as needed */}
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <textarea className='form-control mb-3' rows='4' placeholder='Message'></textarea>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 text-center'>
            <button className="btn btn-lg  appointmentbtn">Make an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
