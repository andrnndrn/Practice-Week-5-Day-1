import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecentPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:3000/posts?_limit=5")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  };
  return (
    <div className="recent-post-cstm">
      <h2 className="mb-4">Recent Posts</h2>

      <div className="recent-post-cstm">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to={`/posts/${post.id}`}
              >
                <h3>{post.title}</h3>
                <span className="span-cstm">
                  <i className="bi bi-calendar-week">
                    {" "}
                    {post.date} | {post.time} {" "}
                  </i>
                </span>
                <p>{post.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <Link className="nav-link text-white " aria-current="page" to="/posts">
          All Posts <i className="bi bi-arrow-right-short"></i>
        </Link>
      </div>
    </div>
  );
}
