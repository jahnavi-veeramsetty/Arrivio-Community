import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import ClubsPage from './pages/ClubsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          {/* Arrivio Daily and other routes can be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
