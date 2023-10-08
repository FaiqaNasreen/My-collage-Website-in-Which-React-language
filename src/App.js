

//import React from 'react';

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Headeres from "./Myapp/Header/Headers";
import Orgaization from './Myapp/AboutUs/Orgaization.js';
import Introduction from "./Myapp/AboutUs/Introduction.js";
import Facilities from './Myapp/AboutUs/Facilities';
import AboutUs from './Myapp/AboutUs';
import AdmissionSched from "./Myapp/Amission/AdmissionSched";
import ApplyOnline from "./Myapp/Amission/ApplyOnline";
import FeeStructure from "./Myapp/Amission/FeeStructure";
import ApplyMethod from "./Myapp/Amission/ApplyMethod";
import ImportantLinks from "./Myapp/Impoinks/ImpotantLinks";
import MainBody from './MainBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
      <Headeres/> 
      <Routes>
      <Route path="/" exact component={MainBody} />
       
        
        <Route element={<Orgaization/>} path="/Orgaization"/>
          <Route element={<Introduction/>} path="/Introduction"/>
          <Route element={<Facilities/>} path="/Facilities"/>
        </Routes>
      <Routes>
        <Route element={<AdmissionSched />}  path='/AdmissionSched'/>
        <Route element={<ApplyOnline />}  path='/ApplyOnline'/>
        <Route element={<FeeStructure />}  path='/FeeStructure'/>
        <Route element={<ApplyMethod />}  path='/ApplyMethod'/>

      </Routes>
        
        <Routes>
          <Route element={<ImportantLinks/>} path='/ImportantLinks'/>
        </Routes>
        <Routes>
          <Route element={<MainBody/>} path='/MainBody'/>
        </Routes>
      </BrowserRouter>
       
      {/* <MainBody/> */}
      </header>
    </div>
  );
}

export default App;
