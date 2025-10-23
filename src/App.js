import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Testimonials from "./pages/Testimonials/Testimonials";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <Router>
      <div className="App" dir="rtl">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <div className="floating-action-buttons">
          <a
            href="https://wa.me/+201069391425"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+201069391425" className="floating-btn phone-btn">
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
