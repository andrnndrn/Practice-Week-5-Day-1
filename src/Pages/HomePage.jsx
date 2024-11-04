import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import RecentPost from "../Components/RecentPost";
import Footer from "../Components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <Info />
          <RecentPost />
          <Footer />
        </div>
      </>
    );
  }
}
