import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Css/Style.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import About from "./components/Aboutus";

function App() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
