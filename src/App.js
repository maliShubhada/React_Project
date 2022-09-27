// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route}from 'react-router-dom'
import Home from './components/pages/Home';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
