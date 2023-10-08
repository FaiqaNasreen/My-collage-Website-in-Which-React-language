

//import Header from './Header';
 import './Myapp/style/MainBody.css';
import MySlider from './Myapp/MySlider';
import Header2 from './Myapp/Header2';
import Cards from './Myapp/Cards';
import Product from './Myapp/Product';
import Footer from './Myapp/Footer';

const MainBody= () => {
 

  return (
    
     <div className='main-body'>
    
     <Header2/>
     {/* <Header /> */}
     <MySlider/>
     <Cards/>
     <Product/>
     <Footer/> 
  </div> 
   
  );
}

export default MainBody;
