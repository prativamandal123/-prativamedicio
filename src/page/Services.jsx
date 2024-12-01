import React from 'react';
import { FaDna, FaHeartbeat, FaHospitalUser, FaNotesMedical, FaPills, FaWheelchair } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaHeartbeat />,
    title: 'Nesciunt Mete',
    description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
  },
  {
    icon: <FaPills />,
    title: 'Eosle Commodi',
    description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
  },
  {
    icon: <FaHospitalUser />,
    title: 'Ledo Markt',
    description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
  },
  {
    icon: <FaDna />,
    title: 'Nesciunt Mete',
    description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
  },
  {
    icon: <FaWheelchair />,
    title: 'Eosle Commodi',
    description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
  },
  {
    icon: <FaNotesMedical />,
    title: 'Ledo Markt',
    description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
  },
];

const Services = () => {
  return (
    <div className='services py-5'>
      <div className='container'>
        <h1 className='text-center mb-4'>Services</h1>
        <div className='lined mb-4'></div>
        <p className='text-center mb-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <div className='row'>
          {servicesData.map((service, index) => (
            <div key={index} className='col-12 col-md-4 text-center mb-4'>
              <div className='icon-box shadow p-4 rounded-circle mb-3'> 
                <div className='servicesicon ' style={{ fontSize: '2rem', color: '#3fbbc0' }}>
                  {service.icon}
                </div>
              </div>
              <h3 className='servicestext'>{service.title}</h3>
              <div className='lined mb-4'></div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
