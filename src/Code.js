//import packages
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import Publish from "./containers/Publish";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const username = "toto";

  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header user={username} />
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish" element={<Publish />} />

          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup" element={<SignUp />} />

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
