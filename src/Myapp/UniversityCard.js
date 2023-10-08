import React from 'react';
import './style/UniversityCard.css';

const UniversityCard = ({ university }) => {
  return (
    <div className='row'>
      <div className="unicard">

        <div className='uniImg'>
          <img src={university.imageUrl} alt={university.name} />
        </div>
        <div>
          <div className="info">
            <h2>{university.name}</h2>
            <p>{university.description}</p>
          </div>
        </div>
        <div className=''>
          <div className="links">
            {university.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

    </div>
   
     
      
      
      
   
    </div>
    
  );
};

export default UniversityCard;
