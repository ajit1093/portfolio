import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./errorPage.scss";

const ErrorPage = () => {
    return (
        <div className="not-found-page">
          <div className="not-found-content">
            <FaExclamationTriangle className="error-icon" />
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-link">
              Go Back Home
            </Link>
          </div>
        </div>
      );
};

export default ErrorPage;