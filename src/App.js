import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Navigation from "./App/Navbar";

import Recruit from "./Pages/recruit";
import Home from "./Pages/home";
import Intern from "./Pages/intern";
import ErrorPage from "./Pages/errorPage";
import LumiLife from "./Pages/lumilife";
import Blog from "./Pages/blog";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuyển dụng LUMI</title>
        <meta name="Tuyển dụng LUMI" content="Tuyển dụng LUMI" />
      </Helmet>

      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/trangchu" element={<Home />} />
          </Route>
          <Route path="/thuctapsinh" element={<Intern />} />
          <Route path="/tuyendung" element={<Recruit />} />
          <Route path="/doisong" element={<LumiLife />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
