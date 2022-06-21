import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from "./components/spinner/Spinner";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News category="general" />} />
        <Route exact path="/business" element={<News category="business" />} />
        <Route exact path="/technology" element={<News category="technology" />} />
        <Route exact path="/sports" element={<News category="sports" />} />
        <Route exact path="*" element={<Spinner text="Page Not Found" hidden="hidden" show="show" />} />
      </Routes>
      <Footer />
    </Router>

  )
};

export default App;
