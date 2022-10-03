// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route}from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Offers';
import SignUp from './components/pages/SignUp';
import UserSignUp from './components/pages/UserSignUp';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/sign-up' element={<UserSignUp/>}></Route>
      {/* <Route path='/user-signup' element={<userSignup/>}></Route>  */}
    </Routes>
    </>
    
  );
}

export default App;
