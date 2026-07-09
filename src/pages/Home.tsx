import { useMemo } from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

interface HomeProps {
  searchQuery: string;
}

export default function Home({ searchQuery }: HomeProps) {
  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) return apps;
    const q = searchQuery.toLowerCase();
    return apps.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.tagline.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">ORD Communications Web Apps</h1>
          <p className="hero-subtitle">
            Tools built for the VA Office of Research and Development to
            streamline communications, track research, and manage compliance.
          </p>
        </div>
      </section>

      <section className="app-grid-section">
        {filteredApps.length > 0 ? (
          <div className="app-grid">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span className="no-results-icon">🔍</span>
            <p>No apps match "<strong>{searchQuery}</strong>"</p>
          </div>
        )}
      </section>
    </main>
  );
}
