import React from 'react'
import Footer from '../Footer'
import "./ImportLink.css";
export default function ImpotantLinks() {
  
  const links = [
    { id: 1, title: 'Protection against Harrassment', url: 'https://www.vu.edu.pk/pages/harassmentProtection.aspx' },
    { id: 2, title: 'Citizen Portal/VU Complaint Handling', url: 'https://www.vu.edu.pk/NewsDetails.aspx?type=&NewsId=3143' },
    { id: 3, title: 'Degree/Transcript Verification', url: 'https://www.vu.edu.pk/verify/OnlineTranscriptVerification.aspx' },
    { id: 4, title: 'DigiSkills', url: 'https://www.digiskills.pk/' },
    { id: 5, title: 'Student Start-Up Business Center', url: '/page5' },
    { id: 6, title: 'Bookshop', url: 'https://bookshop.vu.edu.pk/' },
    { id: 7, title: 'Lecture Videos', url: 'https://www.youtube.com/vu' },
    { id: 8, title: 'HEC Digital Library', url: 'http://www.digitallibrary.edu.pk/' },
    { id: 9, title: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/' },
    { id: 10, title: 'Govt of Pakistan', url: 'https://pakistan.gov.pk/' },
    { id: 11, title: 'Campus Career Portal', url: 'https://www.rozee.pk/' },
    
  ];

  return (
    <div>
    <h1>Universiyt Important Links</h1>
    <div className="responsive-links">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      </div>
<Footer/> 
</div>
  );
}
