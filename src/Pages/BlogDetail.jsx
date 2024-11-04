import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Detail from "../Components/Detail";

export default class BlogDetail extends Component {
    
  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <Detail />
          <Footer />
        </div>
      </>
    );
  }
}
