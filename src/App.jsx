import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import BlogDetail from "./Pages/BlogDetail";
import BlogList from "./Pages/BlogList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts/:id" element={<BlogDetail />}></Route>
          <Route path="/posts" element={<BlogList />}></Route>
        </Routes>
      </Router>
    );
  }
}
