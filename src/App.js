import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/product";
import Login from "./scenes/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
