import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Css/Style.css";
import "../src/Css/Admin.css";
import "../src/Css/Responsive.css";
import { useEffect } from "react";
import Home from "./components/Home";
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
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Product from "./components/Product";
import Quickorder from "./components/Quickorder";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import Adminsidebar from "./components/Admin/Adminsidebar";
import AdminCategory from "./components/Admin/AdminCategory";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProduct from "./components/Admin/AdminProduct";
import UserProfile from "./components/UserProfile";
import { useAuthStore } from "./Store/useAuthStore";
import { Navigate } from "react-router-dom";
import UserDashboard from "./components/User/UserDashboard";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/Login" />;
};

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
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
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Contactus" element={<Contactus />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Quickorder" element={<Quickorder />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route
          exact
          path="/Profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/Adminsidebar" element={<Adminsidebar />} />
        <Route exact path="/AdminCategory" element={<AdminCategory />} />
        <Route exact path="/AdminProduct" element={<AdminProduct />} />
        <Route exact path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
