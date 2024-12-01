import React from 'react';
import { FaHeartBroken, FaPills, FaThermometer, FaDna } from "react-icons/fa";

const cardData = [
  { title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit unde magni modi.", icon: <FaHeartBroken size={40} /> },
  { title: "Sed ut perspici", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit unde magni modi.", icon: <FaPills size={40} /> },
  { title: "Magni Dolores", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit unde magni modi.", icon: <FaThermometer size={40} /> },
  { title: "Nemo Enim", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit unde magni modi.", icon: <FaDna size={40} /> },
];

const BannerCard = () => {
  return (
    <div className='bannercard py-5'>
      <div className='container'>
        <div className='row'>
          {cardData.map((card, index) => (
            <div className='col-12 col-md-3' key={index}>
              <div 
                className='card text-start mb-4 shadow-sm  border-0 bannercarbox' 
                style={{ animationDelay: `${index * 0.2}s` }} 
              >
                <div className='card-body py-5 '>
                  <div className='card-icon mb-3 iconcard'>{card.icon}</div>
                  <h5 className='card-title'>{card.title}</h5>
                  <p className='card-text'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
