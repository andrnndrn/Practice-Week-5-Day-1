import React from "react";
import { Link } from "react-router-dom";

export default function Post({ posts, pagination, handlePageChange }) {
  return (
    <div className="post-cstm">
      <nav className="d-flex flex-column"></nav>
      <main>
        <h1 className="mt-4">Post</h1>
        <p>All the articles I've posted!</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-2">
              <h2 className="mb-1">{post.title}</h2>
              <span>
                <i className="bi bi-calendar-week">
                  {" "}
                  {post.date} | {post.time}{" "}
                </i>
              </span>
              <p>{post.desc}</p>
              <Link
                className="nav-link text-white mb-3 pt-"
                aria-current="page"
                to={`/posts/${post.id}`}
              >
                Read More 
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <nav className="d-flex justify-content-between mt-5">
        <button
          className="nav-link text-white"
          aria-current="page"
          disabled={pagination.prev === null}
          onClick={() => handlePageChange(pagination.prev)}
        >
          Prev
        </button>

        <button
          className="nav-link text-white"
          aria-current="page"
          disabled={pagination.next === null}
          onClick={() => handlePageChange(pagination.next)}
        >
          Next
        </button>
      </nav>
    </div>
  );
}
