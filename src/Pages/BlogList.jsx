import React, { Component } from "react";
import Post from "../Components/Post";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";

export default class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pagination: {
        first: null,
        last: null,
        prev: null,
        next: null,
      },
      page: 1,
    };
  }

  componentDidMount() {
    this.fecthpost();
  }

  componentDidUpdate(prevState) {
    if (prevState.page !== this.state.page) {
      this.fecthpost();
    }
  }

  fecthpost = () => {
    axios
      .get(`http://localhost:3000/posts?_per_page=4&_page=${this.state.page}`)
      .then((res) => {
        this.setState({
          posts: res.data.data,
          pagination: {
            first: res.data.first,
            last: res.data.last,
            prev: res.data.prev,
            next: res.data.next,
          },
        });
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  };

    handlePageChange = (page) => {
      console.log("Page changed to:", page);
    this.setState({ page });
  };

  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <Post
            posts={this.state.posts}
            fetchPosts={this.fecthpost}
            handlePageChange={this.handlePageChange}
            pagination={this.state.pagination}
          />
          <Footer />
        </div>
      </>
    );
  }
}
