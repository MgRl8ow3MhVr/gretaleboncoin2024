//import packages
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import pages called with routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogBoxModal from "./components/LogBoxModal";

const App = () => {
  //Get the cookie value - set it into State user - 'undefined' if not existent
  const userStored = localStorage.getItem("username") || null;
  const tokenStored = localStorage.getItem("token") || null;

  const [user, setUser] = useState(userStored);
  const [token, setToken] = useState(tokenStored);
  const [showModal, setShowModal] = useState(false);

  //Login actions to be passed in Header and Sign uP
  const loginOK = (username, token) => {
    setUser(username);
    setToken(token);
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
  };

  //Login actions to be passed in Header to UnLog
  const unLog = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    alert("vous etes déconnecté");
  };

  return (
    <Router>
      {/* # # # # # # # LOGBOX # # # # # # # # # # # #  */}
      {showModal && (
        <LogBoxModal
          loginOK={loginOK}
          unshowmodal={() => {
            setShowModal(false);
          }}
        />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header
        user={user}
        showmodal={() => {
          setShowModal(true);
        }}
        // Disconnect actions
        unLog={unLog}
      />
      <div className="headerGhost"></div>
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer token={token} />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish" element={<Publish token={token} />} />

          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup" element={<SignUp loginOK={loginOK} />} />

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
