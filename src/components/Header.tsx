import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand">
          <span className="header-icon">🏛️</span>
          <span className="header-title">ORD Comms App Store</span>
        </Link>

        {isHome && (
          <>
            <div className="header-search-desktop">
              <SearchBar value={searchQuery} onChange={onSearchChange} />
            </div>
            <button
              className="header-search-toggle"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              aria-label="Toggle search"
            >
              {mobileSearchOpen ? '✕' : '🔍'}
            </button>
          </>
        )}
      </div>

      {isHome && mobileSearchOpen && (
        <div className="header-search-mobile">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
      )}
    </header>
  );
}
