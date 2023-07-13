import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/home/homePage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
