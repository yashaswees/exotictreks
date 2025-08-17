import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">The page you're looking for doesn't exist.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
