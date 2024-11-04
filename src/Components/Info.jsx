import React from "react";
import  { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="info-cstm mb-5 mt-5">
      <h1 className="mb-4">Mingalaba <i className="bi bi-wifi"></i></h1>
      <div>
        <p>
          AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
          blog theme. This theme follows best practices and provides
          accessibility out of the box. Light and dark mode are supported by
          default. Moreover. additional color schemes can also be configured.
        </p>
        <p className="d-flex">
          Read the blog posts or check  <Link className="nav-link text-white ms-1 me-1" aria-current="page" to="/posts"> README </Link>  for more info
              </p>
              <div className="d-flex gap-2 mb-4">
                  <p>Social Links:</p>
                  <i className="bi bi-github"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
              </div>
      </div>
    </div>
  );
}
