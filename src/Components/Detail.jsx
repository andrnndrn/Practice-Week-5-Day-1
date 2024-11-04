import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DetailWrapper() {
  const params = useParams();
  const navigate = useNavigate();

  return <Detail params={params} navigate={navigate} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.fetchPostDetail(id);
  }

  fetchPostDetail= (id) => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
      });
  };

  render() {
    const { post } = this.state;

    if (!post) {
      return <div>Loading...</div>;
  }

    return (
      <div className="detail-cstm">
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to="/posts"
              >
                <i className="bi bi-chevron-left"></i> Go Back
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>{post.title}</h2>
          <span>
            <i className="bi bi-calendar-week"> {post.date} | {post.time} </i>
          </span>

          <div className="mt-3">
            <p>{post.desc}</p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }}/>

          <div className="d-flex flex-column mt-5">
            <div className="d-flex justify-content-center">
              <p>
                <i>Share this post on:</i>
              </p>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-telegram"></i>
              </a>
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-pinterest"></i>
              </a>
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <a className="nav-link text-white" aria-current="page" href="#">
                Back to Top
              </a>
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between mt-5">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href="#"
              >
                <div>
                  <span>Previous Post</span>
                  <div>.....</div>
                </div>
              </Link>
              <Link
                className="nav-link text-white "
                aria-current="page"
                href="#"
              >
                <div>
                  <span>Next Post</span>
                  <div>.....</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailWrapper;