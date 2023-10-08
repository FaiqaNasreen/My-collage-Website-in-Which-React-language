
import React from 'react';
import './style/product.css';
import  "./style/UniversityCard.css";
import UniversityCard from './UniversityCard';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
const universities = [
  {
    name: 'University of Education Lahore',
    imageUrl: '/uni2.jpg',
    description: 'Univirsty of Education is best.',
    links: [
      { label: 'Website', url: 'https://ue.edu.pk/' },
      { label: 'Admissions', url: 'https://ue.edu.pk/admissions/2023/' },
      { label: 'Exam Sechdual', url: 'https://ue.edu.pk/examination/' },
      { label: 'Community', url: 'https://ue.edu.pk/community.php' },
      // Add more links as needed
    ],
  },
  {
    name: 'Virtual University of Pakistan',
    imageUrl: '/uni4.jpg',
    description: 'This University is best for Study.',
    links: [
      { label: 'Website', url: 'https://www.vu.edu.pk/' },
      { label: 'Admissions', url: 'https://www.vu.edu.pk/Admissions/AdmissionProcedure.aspx' },
      { label: 'Opportunities', url: 'https://www.vu.edu.pk/Opportunities/Jobs.aspx' },
      { label: 'VU LMS', url: 'https://vulms.vu.edu.pk/' },
      // Add more links as needed
    ],
  },
  {
    name: 'University of Education Lahore',
    imageUrl: '/uni2.jpg',
    description: 'Univirsty of Education is best.',
    links: [
      { label: 'Website', url: 'https://ue.edu.pk/' },
      { label: 'Admissions', url: 'https://ue.edu.pk/admissions/2023/' },
      { label: 'Exam Sechdual', url: 'https://ue.edu.pk/examination/' },
      { label: 'Community', url: 'https://ue.edu.pk/community.php' },
      // Add more links as needed
    ],
  },
  {
    name: 'Engineering university of Lahore',
    imageUrl: '/uni5.jpg',
    description: 'This University is best platfaorm for study.',
    links: [
      { label: 'Website', url: 'https://mnsuet.edu.pk/' },
      { label: 'Admissions', url: 'https://mnsuet.edu.pk/administration/' },
      { label: 'Adminestration', url: 'https://mnsuet.edu.pk/administration/' },
      { label: 'Faculty Members', url: 'https://mnsuet.edu.pk/faculty-members/' },
      // Add more links as needed
    ],
  },
  {
    name:  'Bahauddin Zakariya University Multan',
    imageUrl: '/uni7.jpg',
    description: 'This University is best for Study.',
    links: [
      { label: 'Website', url: 'https://www.bzu.edu.pk/index.php' },
      { label: 'Faculties and Departments', url: 'https://www.bzu.edu.pk/v2_departments.php' },
      { label: 'BZU Contect', url: 'https://www.bzu.edu.pk/v2_contactus.php' },
      { label: 'About BZU MULTAN', url: 'https://www.bzu.edu.pk/index.php' },
      // Add more links as needed
    ],
  },
  // Add more university objects as needed
];

function Product() {
  return (
    <div className="product-container">
      <div className="sidebar">
   
   
      {[
        'Primary',
        'Secondary',
        'Success',
       
        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <ProgressBar animated now={45} />;
            </Card.Text>

          </Card.Body>
        </Card>
      ))};
    </div>
    <div className="card">
  
     {universities.map((university, index) => (
        <UniversityCard key={index} university={university} />
      ))}
     
      </div>
    </div>

  );
}

export default Product;
