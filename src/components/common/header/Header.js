import React, { useState } from "react";
import "./Header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <div>
      <header>
        <div className="container flex">
          <div className="logo"></div>
          <img src="./images/logo.png" alt="Image" />

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
