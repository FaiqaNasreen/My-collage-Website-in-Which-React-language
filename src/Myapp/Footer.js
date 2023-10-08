import React from 'react';
import './style/footer.css';
import FooterCard from './FooterCard';
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha384-rp8ziKYtCq06P7hiKo0s5fFfFAr5mzVJ7Z0v9tJpHqzwe8zh5P+3zE5F5r5kfaDbF"
    crossorigin="anonymous"
  ></link>
  return (
    <div className="footer">
      <FooterCard title="About Us">
        <ul>
          <li>About Company</li>
          <li>Our Team</li>
          <li>Testimonials</li>
        </ul>
      </FooterCard>

      <FooterCard title="Contact">
        <p>Phone: +1 123 456 7890</p>
        <a href=' info@mnsuet.edu.pk'>Email:Exampl@gmail.com</a>
      </FooterCard>

      <FooterCard title="Follow Us">
        <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i> Facebook</a>
        <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i> Instagram</a>
        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i> LinkedIn</a>
      </FooterCard>
    </div>
  );
};

export default Footer;
