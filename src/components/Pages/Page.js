import React from "react";
import { Header } from "../common/header/Header";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import About from "../about/About";
import Services from "../services/Services";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";

function Page() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default Page;
