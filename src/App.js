import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/homePage/home';
import Shop from './pages/shopPage/shop';
import AboutUs from './pages/aboutUsPage/aboutUs';
import Services from './pages/services/Services';
import Blog from './pages/blog/blog';
import ContactUs from './pages/contact/contact';

//register
import Register from './pages/registerPage/register'

//navbar
import NavBar from './components/navi-bar/navBar';

//footer
import Footer from './components/ui/footer/footer'



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shopPages' element={<Shop/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
