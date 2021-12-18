import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Topics from "./Topics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopicsQueryString from "./TopicsQueryString";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics/">
          <Route path=":data" element={<Topics />} />
          <Route path="" element={<Topics />} />
        </Route>
        <Route path="/topicsquerystring" element={<TopicsQueryString />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
