// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route}from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
