import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy'; // ✅ Privacy page import
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';
import ScrollToTop from './components/ScrollToTop'; // ✅ ScrollToTop import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures each route starts from top */}
      <div className="min-h-screen bg-white">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} /> {/* ✅ Privacy route added */}
        </Routes>
        <Footer />
        <FloatingAction />
      </div>
    </Router>
  );
}

export default App;
