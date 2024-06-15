import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Css/Style.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import About from "./components/Aboutus";
import Arun from "./components/Arun";
import Hari from "./components/Hari";
import Gokul from "./components/Gokul";
import Privacypolicy from "./components/PrivacyPolicy";
import TermsandConditions from "./components/Terms";
import Firesafety from "./components/Firesafety";
import Importantnotes from "./components/Importantnotes";
import Greencrackers from "./components/Greencrackers";
import Faq from "./components/Faq";
import Chit from "./components/Chit";
import Shipping from "./components/Shipping";
import Corporate from "./components/Corporate";
import ChannelPartner from "./components/ChannelPartner";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Arun" element={<Arun />} />
        <Route exact path="/Hari" element={<Hari />} />
        <Route exact path="/Gokul" element={<Gokul />} />
        <Route exact path="/Privacypolicy" element={<Privacypolicy />} />
        <Route
          exact
          path="/TermsandConditions"
          element={<TermsandConditions />}
        />
        <Route exact path="/Faq" element={<Faq />} />
        <Route exact path="/Firesafetytips" element={<Firesafety />} />
        <Route exact path="/Importantnotes" element={<Importantnotes />} />
        <Route exact path="/Greencrackers" element={<Greencrackers />} />
        <Route exact path="/Chit" element={<Chit />} />
        <Route exact path="/Shipping" element={<Shipping />} />
        <Route exact path="/Corporate" element={<Corporate />} />
        <Route exact path="/ChannelPartner" element={<ChannelPartner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
