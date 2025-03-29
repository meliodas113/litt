
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page since contact flow is removed
    navigate("/");
  }, [navigate]);

  return null; // No content needed as we're redirecting
};

export default Contact;
