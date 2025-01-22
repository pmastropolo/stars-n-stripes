import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPages() {
  return (
    <div className="error-section error-page-bg-img ak-bg ak-center">
      <div className="error-content">
        <h1 className="error-title ak-stroke-number color-white">404</h1>
        <h2 className="erro-sub-title">Sorry! The Page isn't Found Here</h2>
        <p className="erro-desp">
error
        </p>
        <div className="go-to-home">
          <Link to="/" className="common-btn">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
