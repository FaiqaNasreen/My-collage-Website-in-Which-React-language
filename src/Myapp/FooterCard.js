import React from 'react';
import './style/footer.css';

const FooterCard = ({ title, children }) => {
  return (
    <div className="footer-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FooterCard;
