import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div class="list-group">
        <Link to="/adminhome" className="list-group-item">
          <span>
            <i class="fas fa-house fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Home</span>
        </Link>
        <Link to="/product" className="list-group-item">
          <span>
            <i class="fa-brands fa-buffer fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Product</span>
        </Link>
        <Link to="/team" className="list-group-item">
          <span>
            <i class="fa-solid fa-users fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Team</span>
        </Link>
        <Link to="/testimonial" className="list-group-item">
          <span>
            <i class="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </Link>
        <Link to="/testimonial" className="list-group-item">
          <span>
            <i class="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </Link>
        <Link to="/testimonial" className="list-group-item">
          <span>
            <i class="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </Link>
        <Link to="/testimonial" className="list-group-item">
          <span>
            <i class="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </Link>
        <Link to="/testimonial" className="list-group-item">
          <span>
            <i class="fa-regular fa-comment-dots fs-5"></i>
          </span>
          <span className="float-end me-3 fw-semibold">Testimonial</span>
        </Link>
      </div>
    </>
  );
};

export default AdminSidebar;
