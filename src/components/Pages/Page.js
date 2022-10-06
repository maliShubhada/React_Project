import React from "react";
import { Header } from "../common/header/Header";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function Page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>
    </>
  );
}

export default Page;
