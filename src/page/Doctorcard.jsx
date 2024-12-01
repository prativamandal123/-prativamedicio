import React from 'react';

const doctors = [
  {
    name: "Walter White",
    title: "Officer",
    imgSrc: "https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-1.jpg"
  },
  {
    name: "Jane Doe",
    title: "Surgeon",
    imgSrc: "https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-2.jpg"
  },
  {
    name: "John Smith",
    title: "Pediatrician",
    imgSrc: "https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-3.jpg"
  },
  {
    name: "Mary Johnson",
    title: "Cardiologist",
    imgSrc: "https://bootstrapmade.com/content/demo/Medicio/assets/img/doctors/doctors-4.jpg"
  }
];

const DoctorCard = () => {
  return (
    <div className='doctor-text text-center py-5'>
     <div className='container  doctorcardtext'>
      <h1 className=''>Doctors</h1>
      <div className='lined'></div>
      <p className='mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='row'>
          {doctors.map((doctor, index) => (
            <div className='col-12 col-md-3 mb-5  mt-4 border-0' key={index}>
              <div className='card shadow-sm doctorcard'  style={{ animationDelay: `${index * 0.2}s` }} >
                <img src={doctor.imgSrc} alt={doctor.name} className='card-img-top' />
                <div className='card-body text-start'>
                  <h5 className='card-title '>{doctor.name}</h5>
                  <p className='card-text'>{doctor.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
