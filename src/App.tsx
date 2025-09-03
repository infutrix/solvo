import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ForBusinesses from './pages/ForBusinesses';
import BecomePartner from './pages/BecomePartner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/for-businesses" element={<ForBusinesses />} />
            <Route path="/become-partner" element={<BecomePartner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;