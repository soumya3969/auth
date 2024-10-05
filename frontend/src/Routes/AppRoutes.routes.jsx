// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUpPage from "../Pages/SignUpPage";
import LogInPage from "../Pages/LogInPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
