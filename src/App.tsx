import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app-shell">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/app/:id" element={<AppDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
